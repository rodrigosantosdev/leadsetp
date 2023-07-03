import React from "react";

type LogoProps = {
  width: number;
  height: number;
}

export function Logo({width, height }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 1072 230"
    >
      <defs>
        <linearGradient
          id="linearGradient-1"
          x1="0%"
          x2="99.999%"
          y1="49.999%"
          y2="49.999%"
        >
          <stop offset="0%" stopColor="#2E84FC"></stop>
          <stop offset="100%" stopColor="#035DDB"></stop>
        </linearGradient>
        <linearGradient
          id="linearGradient-2"
          x1=".001%"
          x2="100.005%"
          y1="50.001%"
          y2="50.001%"
        >
          <stop offset="0%" stopColor="#00E1FF"></stop>
          <stop offset="100%" stopColor="#00B8FF"></stop>
        </linearGradient>
        <linearGradient
          id="linearGradient-3"
          x1="-.01%"
          x2="100.003%"
          y1="50.004%"
          y2="50.004%"
        >
          <stop offset="0%" stopColor="#00E1FF"></stop>
          <stop offset="100%" stopColor="#00B8FF"></stop>
        </linearGradient>
        <linearGradient
          id="linearGradient-4"
          x1=".003%"
          x2="100.001%"
          y1="50.006%"
          y2="50.006%"
        >
          <stop offset="0%" stopColor="#00E1FF"></stop>
          <stop offset="100%" stopColor="#00B8FF"></stop>
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
        <g fillRule="nonzero" transform="translate(0 -569)">
          <g transform="translate(0 569)">
            <g>
              <path
                fill="url(#linearGradient-1)"
                d="M194.2 227.18c-7.06 4.07-16.08 1.66-20.15-5.4l-44.58-77.24-44.58 77.23c-4.07 7.06-13.1 9.47-20.15 5.4-7.06-4.07-9.48-13.1-5.4-20.15l44.58-77.23H14.75C6.6 129.79 0 123.19 0 115.04s6.6-14.75 14.75-14.75h114.72c5.27 0 10.14 2.81 12.77 7.38l57.36 99.36c4.08 7.05 1.66 16.07-5.4 20.15z"
              ></path>
              <path
                fill="url(#linearGradient-2)"
                d="M176.28 122.42c2.64 4.56 7.5 7.37 12.77 7.37h55.13c8.15 0 14.75-6.6 14.75-14.75s-6.6-14.75-14.75-14.75h-55.13c-11.35 0-18.45 12.29-12.77 22.13z"
              ></path>
              <path
                fill="url(#linearGradient-3)"
                d="M194.2 2.9c-7.06-4.07-16.08-1.66-20.15 5.4l-32.96 57.09c-4.07 7.06-1.66 16.08 5.4 20.15 7.05 4.07 16.07 1.65 20.15-5.4l32.96-57.09c4.07-7.05 1.66-16.07-5.4-20.15z"
              ></path>
              <path
                fill="url(#linearGradient-4)"
                d="M117.79 65.4L84.89 8.3C80.82 1.25 71.8-1.17 64.74 2.9h-.01c-7.06 4.07-9.47 13.09-5.4 20.15l32.9 57.09A14.74 14.74 0 00105 87.51h.01c11.36.01 18.46-12.28 12.78-22.11z"
              ></path>
            </g>
            <g fill="#191919" transform="translate(342 33)">
              <path d="M92.77 129.75L0.33 129.75 0.33 5.07 27.45 5.07 27.45 106.38 92.78 106.38 92.78 129.75z"></path>
              <path d="M96.52 83.19c0-38.55 33.43-48.78 51-48.78 24.05 0 48.1 16.37 48.95 46.56 0 7.16-.51 11.77-.51 11.77h-74.02c3.07 15.35 20.47 17.06 25.58 17.06 14.16 0 21.15-7.67 24.05-10.92l19.79 11.43c-3.75 5.12-16.37 21.83-43.83 21.83-18.26 0-51.01-10.4-51.01-48.95zm26.09-8.53h46.9c-1.02-8.53-9.38-17.91-22.17-17.91-14.66 0-23.7 8.36-24.73 17.91zM278 120.37c-3.92 5.29-15.18 11.43-28.48 11.43-29.68 0-47.08-22-47.08-48.95 0-26.95 17.4-48.95 47.08-48.95 13.64 0 23.71 5.46 28.48 11.77v-9.72h25.24v93.81H278v-9.39zm-24.73-64.13c-16.2 0-25.75 11.26-25.75 26.61 0 14.84 10.06 26.44 25.75 26.44 15.86 0 25.75-10.06 25.75-26.44 0-15.52-9.89-26.61-25.75-26.61zM385.96 120.37c-3.92 5.29-15.18 11.43-28.48 11.43-29.68 0-47.08-22-47.08-48.95 0-26.95 17.4-48.95 47.08-48.95 13.65 0 23.71 5.46 28.48 11.77V.81h25.24v128.95h-25.24v-9.39zm-24.73-64.13c-16.2 0-25.75 11.26-25.75 26.61 0 14.84 10.06 26.44 25.75 26.44 15.86 0 25.75-10.06 25.75-26.44.01-15.52-9.89-26.61-25.75-26.61z"></path>
              <path d="M419.22 117.3l13.3-17.74c7.33 4.95 19.1 10.06 30.36 10.06 7.85 0 13.47-3.58 13.47-8.36 0-6.31-13.13-6.99-18.08-7.85-12.79-2.22-37.18-5.97-37.18-29.51 0-27.46 29.68-29.68 38.72-29.68 14.84 0 26.78 4.26 39.06 13.47l-13.3 17.4c-6.99-4.09-16.2-8.7-26.61-8.7-4.95 0-12.28 2.39-12.28 6.99 0 6.31 13.64 7.85 17.74 8.36 15.86 2.73 37.35 5.46 37.35 29.68 0 19.44-13.99 30.53-38.55 30.53-20.12.02-33.76-6.46-44-14.65zM541.69 96.32c0 5.12.17 13.99 11.6 13.99 2.9 0 4.95-.17 6.48-.34v21.49c-3.07.34-7.85.68-11.43.68-19.79 0-31.89-3.58-31.89-23.37V56.75h-11.43V34.41h11.43V9.34h25.24v25.07h18.76v22.34h-18.76v39.57z"></path>
              <path d="M563.69 83.19c0-38.55 33.43-48.78 51-48.78 24.05 0 48.1 16.37 48.95 46.56 0 7.16-.51 11.77-.51 11.77H589.1c3.07 15.35 20.47 17.06 25.58 17.06 14.16 0 21.15-7.67 24.05-10.92l19.79 11.43c-3.75 5.12-16.37 21.83-43.83 21.83-18.26 0-51-10.4-51-48.95zm26.09-8.53h46.9c-1.02-8.53-9.38-17.91-22.17-17.91-14.67 0-23.7 8.36-24.73 17.91z"></path>
              <path d="M697.41 88.31v41.45H672V35.95h25.41V48.4c9.55-12.62 25.41-14.33 32.07-14.16v24.9c-6.15-.51-32.07.68-32.07 29.17z"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
