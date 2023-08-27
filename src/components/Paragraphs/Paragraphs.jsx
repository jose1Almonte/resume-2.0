// import React from 'react'

export function Paragraphs({bigParagraphStyles, paragraphText}) {
  return (
    <p className={bigParagraphStyles}>
        {paragraphText.split("\n").map((paragraph, index) => (
            <p key={index}>
                {paragraph}
                <br />
            </p>
        ))}
    </p>
  )
}
