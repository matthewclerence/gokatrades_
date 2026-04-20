export interface CaptionWord {
  text: string;
  /** Start time in seconds */
  start: number;
  /** End time in seconds */
  end: number;
}

export interface MeasurementOverlay {
  /** Which scene index this appears on (0-based) */
  scene: number;
  /** Main value, e.g. "2.1 mm" */
  value: string;
  /** Subtitle, e.g. "Left edge" */
  label: string;
  /** Horizontal position as % from left (default 50) */
  x?: number;
  /** Vertical position as % from top (default 30) */
  y?: number;
}

export interface RedCircleAnnotation {
  /** Which scene index (0-based) */
  scene: number;
  /** Center X as % from left */
  x: number;
  /** Center Y as % from top */
  y: number;
  /** Radius in pixels (default 60) */
  radius?: number;
  /** Frame within the scene when it appears (default 0) */
  startFrame?: number;
}

export interface Scene {
  /** Video file name in public/clips/ */
  clip: string;
  /** Duration in seconds */
  duration: number;
  /** Optional: start offset in seconds to trim the clip */
  trimStart?: number;
}

export interface ScreenshotOverlay {
  /** Which scene index (0-based) */
  scene: number;
  /** Image file name in public/images/ */
  image: string;
  /** Position: "full" covers the whole frame, "top" upper half, "inset" small overlay */
  position: "full" | "top" | "inset";
  /** Opacity (default 1) */
  opacity?: number;
}

export interface ReelConfig {
  /** Bold hook question text for the opening */
  hookText: string;
  /** How many seconds the hook text stays visible (default 3) */
  hookDuration?: number;
  /** Ordered list of scenes */
  scenes: Scene[];
  /** Word-by-word captions from voiceover */
  captions: CaptionWord[];
  /** Measurement overlays on specific scenes */
  measurements?: MeasurementOverlay[];
  /** Red circle annotations on specific scenes */
  annotations?: RedCircleAnnotation[];
  /** Screenshot/image overlays on specific scenes */
  screenshots?: ScreenshotOverlay[];
  /** Card name for lower-third, e.g. "Umbreon ex #161" */
  cardName?: string;
  /** PSA/BGS grade, e.g. "PSA 9" */
  grade?: string;
  /** Whether voiceover audio exists (default true) */
  hasVoiceover?: boolean;
}
