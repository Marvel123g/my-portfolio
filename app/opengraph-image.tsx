// import { ImageResponse } from "next/og";

// export const runtime = "edge";
// export const alt = "Olorunwa Marvelous — Frontend Developer";
// export const size = { width: 1200, height: 630 };
// export const contentType = "image/png";

// export default function OGImage() {
//   return new ImageResponse(
//     (
//       <div
//         style={{
//           width: "100%",
//           height: "100%",
//           display: "flex",
//           flexDirection: "column",
//           justifyContent: "flex-end",
//           padding: "60px 72px",
//           background: "#0a0b0d",
//           position: "relative",
//           fontFamily: "serif",
//         }}
//       >
//         {/* Grid background */}
//         <div
//           style={{
//             position: "absolute",
//             inset: 0,
//             backgroundImage:
//               "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
//             backgroundSize: "80px 80px",
//           }}
//         />

//         {/* Accent glow */}
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             right: 0,
//             width: 600,
//             height: 400,
//             background:
//               "radial-gradient(ellipse at 100% 0%, rgba(200,240,78,0.08) 0%, transparent 70%)",
//           }}
//         />

//         {/* Top accent line */}
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             right: 0,
//             height: "3px",
//             background: "#c8f04e",
//           }}
//         />

//         {/* Section number */}
//         <span
//           style={{
//             position: "absolute",
//             top: 60,
//             left: 72,
//             fontFamily: "monospace",
//             fontSize: "12px",
//             letterSpacing: "0.2em",
//             textTransform: "uppercase",
//             color: "#55595f",
//           }}
//         >
//           portfolio.marvelous.dev
//         </span>

//         {/* Main content */}
//         <div style={{ display: "flex", flexDirection: "column", gap: "16px", zIndex: 1 }}>
//           <div
//             style={{
//               display: "flex",
//               alignItems: "center",
//               gap: "8px",
//               marginBottom: "8px",
//             }}
//           >
//             <div
//               style={{
//                 width: "8px",
//                 height: "8px",
//                 borderRadius: "50%",
//                 background: "#c8f04e",
//               }}
//             />
//             <span
//               style={{
//                 fontFamily: "monospace",
//                 fontSize: "13px",
//                 letterSpacing: "0.2em",
//                 textTransform: "uppercase",
//                 color: "#c8f04e",
//               }}
//             >
//               Available for Frontend Roles
//             </span>
//           </div>

//           <h1
//             style={{
//               fontSize: "72px",
//               fontWeight: 400,
//               lineHeight: 0.92,
//               letterSpacing: "-0.03em",
//               color: "#f0f0ef",
//               margin: 0,
//             }}
//           >
//             Olorunwa
//             <br />
//             <span style={{ color: "#8d9099", fontStyle: "italic" }}>Marvelous</span>
//           </h1>

//           <p
//             style={{
//               fontFamily: "monospace",
//               fontSize: "18px",
//               color: "#8d9099",
//               margin: 0,
//               letterSpacing: "0.02em",
//             }}
//           >
//             Frontend Developer · React · Next.js · TypeScript · Lagos, NG
//           </p>
//         </div>

//         {/* Bottom right badge */}
//         <div
//           style={{
//             position: "absolute",
//             bottom: 60,
//             right: 72,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "flex-end",
//             gap: "6px",
//           }}
//         >
//           <span
//             style={{
//               fontFamily: "monospace",
//               fontSize: "11px",
//               letterSpacing: "0.15em",
//               textTransform: "uppercase",
//               color: "#55595f",
//             }}
//           >
//             marvelousdev.netlify.app
//           </span>
//         </div>
//       </div>
//     ),
//     { ...size },
//   );
// }

