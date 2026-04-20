"""Generate Bahasa Indonesia VO for the Pokemon Trend Reel using Edge TTS.
Shared between cinematic + pixel versions (same script, same VO, padded to scene timing).
"""
import asyncio
import subprocess
import sys
from pathlib import Path

import edge_tts

OUT_DIR = Path("audio_out")
OUT_DIR.mkdir(parents=True, exist_ok=True)

VOICE = "id-ID-ArdiNeural"
RATE = "+0%"

SCENES = [
    ("scene1_hook", 2.3,
     "Pokemon udah bukan mainan anak-anak lagi. Di tahun 2026, ini bukan hobi — ini pasar jutaan dollar."),
    ("scene2_backstory", 8.7,
     "Sebenernya tren ini udah mulai dari 2023, pas Pokemon 151 keluar dan bikin pasar global panas lagi. Dari situ, harga kartu Pokemon nggak pernah benar-benar turun. Tiap set baru keluar, harga lama bukannya turun, malah ikut naik."),
    ("scene3_turning", 18.7,
     "Trus pertengahan 2025, semuanya meledak. Konten unboxing viral tiap hari. Dan baru-baru ini, Februari 2026, Logan Paul jual satu kartu Pikachu Illustrator seharga 263 miliar rupiah. Pegang rekor dunia sebagai trading card termahal yang pernah dijual. Dari situ, dunia makin yakin — Pokemon udah jadi aset, bukan mainan."),
    ("scene4_condition", 32.3,
     "Sekarang di 2026, semua segmen naik. Modern set kayak Prismatic Evolutions dan Ascended Heroes sold out di mana-mana. Vintage Base Set Charizard tembus angka rekor. Bahkan promo card yang dulu cuma bonus event, sekarang harganya jutaan. Pasar Pokemon bener-bener satu arah: naik terus."),
    ("scene5_why", 44.7,
     "Dan kenapa harga nggak turun? Karena empat hal ini masih jalan bareng — produksi nggak bisa ngejar, demand global makin tinggi, hype belum reda, dan investor masih terus masuk. Selama empat ini ada, harga nggak akan ke mana-mana."),
    ("scene6_upcoming", 54.5,
     "Dan yang bikin makin gila — sampai akhir 2026, masih banyak set hype yang bakal rilis. Dan kita semua udah tau apa yang bakal terjadi. Pertanyaannya — apakah harga cuma akan terus naik, atau akan crash?"),
    ("scene7_cta", 64.3,
     "Drop komen di bawah, kapan menurut kalian tren Pokemon ini bakal berhenti. Atau emang udah jadi pasar permanen?"),
]

TOTAL_DURATION = 72.0


def ff(*args: str) -> None:
    subprocess.run(["ffmpeg", "-y", *args], capture_output=True, check=True)


async def render_scene(scene_id: str, text: str) -> Path:
    out_path = OUT_DIR / f"{scene_id}.mp3"
    communicate = edge_tts.Communicate(text, VOICE, rate=RATE)
    await communicate.save(str(out_path))
    print(f"  rendered {scene_id}.mp3")
    return out_path


async def main() -> None:
    print(f"Voice: {VOICE}")
    for scene_id, _, text in SCENES:
        await render_scene(scene_id, text)

    print("\nBuilding concat list...")
    concat_lines = []
    cursor = 0.0
    for scene_id, start, _ in SCENES:
        gap = start - cursor
        if gap > 0:
            silence = OUT_DIR / f"silence_{scene_id}.mp3"
            ff(
                "-f", "lavfi", "-i", "anullsrc=r=24000:cl=mono",
                "-t", str(gap), "-q:a", "9", "-acodec", "libmp3lame",
                str(silence),
            )
            concat_lines.append(f"file '{silence.name}'")
        concat_lines.append(f"file '{scene_id}.mp3'")
        result = subprocess.run(
            ["ffprobe", "-v", "error", "-show_entries",
             "format=duration", "-of",
             "default=noprint_wrappers=1:nokey=1",
             str(OUT_DIR / f"{scene_id}.mp3")],
            capture_output=True, text=True, check=True,
        )
        cursor = start + float(result.stdout.strip())

    tail = TOTAL_DURATION - cursor
    if tail > 0.05:
        tail_path = OUT_DIR / "silence_tail.mp3"
        ff(
            "-f", "lavfi", "-i", "anullsrc=r=24000:cl=mono",
            "-t", str(tail), "-q:a", "9", "-acodec", "libmp3lame",
            str(tail_path),
        )
        concat_lines.append(f"file '{tail_path.name}'")

    concat_file = OUT_DIR / "concat.txt"
    concat_file.write_text("\n".join(concat_lines), encoding="utf-8")

    final_vo = Path("voiceover_full.mp3")
    ff(
        "-f", "concat", "-safe", "0", "-i", str(concat_file),
        "-c", "copy", str(final_vo),
    )
    print(f"Done. Final VO: {final_vo}")


if __name__ == "__main__":
    sys.exit(asyncio.run(main()))
