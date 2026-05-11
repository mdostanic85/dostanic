type SplitTextProps = {
  /** The text to render with per-word, per-char animated entrance. */
  children: string
  /** Element tag — defaults to span so callers control heading semantics. */
  as?: 'span' | 'h1' | 'h2' | 'h3' | 'div' | 'p'
  /** Class applied to the outer element. */
  className?: string
  /** Stagger between characters in ms. Defaults to 30. */
  stagger?: number
  /** Initial offset in ms before the first char starts. Defaults to 0. */
  delay?: number
}

/**
 * Editorial split-text reveal — each character lifts from below a mask in a
 * staggered cascade. Reduced-motion is honoured via globals.css overrides.
 *
 * Output structure:
 *   <Tag>
 *     <span class="char-mask">  // word 1
 *       <span class="char-rise" style="...delay">M</span>
 *       <span class="char-rise" style="...delay">i</span>
 *     </span>
 *     <span> </span>            // visible space between words
 *     <span class="char-mask">  // word 2 ...
 *   </Tag>
 *
 * Words are wrapped so they never break mid-character; the mask provides the
 * visual "letters lifting from a line" effect that's signature to atomic.black.
 */
export default function SplitText({
  children,
  as: Tag = 'span',
  className = '',
  stagger = 30,
  delay = 0,
}: SplitTextProps) {
  const words = children.split(' ')
  let charIndex = 0

  return (
    <Tag className={className} aria-label={children}>
      {words.map((word, wordIdx) => (
        <span key={wordIdx} className="inline-block whitespace-nowrap">
          <span className="char-mask">
            {Array.from(word).map((char, ci) => {
              const localDelay = delay + charIndex * stagger
              charIndex += 1
              return (
                <span
                  key={ci}
                  className="char-rise"
                  style={{ animationDelay: `${localDelay}ms` }}
                  aria-hidden="true"
                >
                  {char}
                </span>
              )
            })}
          </span>
          {wordIdx < words.length - 1 ? (
            <span aria-hidden="true">&nbsp;</span>
          ) : null}
        </span>
      ))}
    </Tag>
  )
}
