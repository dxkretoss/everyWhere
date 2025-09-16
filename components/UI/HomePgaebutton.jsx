import React from 'react'

export default function HomePgaebutton({ leftImg, rightImg, text, className = "", minWidth }) {
    return (
        <button
            style={{ minWidth }}
            className={`
                ${className} 
                flex items-center justify-center gap-2
                px-4 py-2 border rounded-[10px] bg-white 
                hover:bg-gray-50 transition 
                whitespace-nowrap
                w-auto max-w-full
            `}
        >
            {leftImg && (
                <img
                    src={leftImg}
                    alt="left"
                    className="flex-shrink-0"
                />
            )}

            <span className="text-sm font-medium">
                {text}
            </span>

            {rightImg && (
                <img
                    src={rightImg}
                    alt="right"
                    className="flex-shrink-0"
                />
            )}
        </button>
    )
}
