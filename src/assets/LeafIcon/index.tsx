import { SVGProps } from "react"
import { Icon } from "./styles"

const LeafIcon = (props: SVGProps<SVGSVGElement>) => (
  <Icon
    viewBox="0 0 500 500"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <path d="M 495.874 37.365 L 490.372 0 L 462.056 13.59 C 407.573 39.688 351.529 36.414 293.366 31.911 C 235.001 27.392 170.649 28.62 115.183 52.102 C 55.456 76.11 14.994 116.607 3.837 176.98 C -3.262 215.368 -5.544 271.038 43.336 343.608 C 77.283 320.375 93.594 330.81 126.103 294.382 C 153.028 256.993 186.838 179.845 230.455 161.137 C 272.485 143.032 318.405 134.479 364.538 136.129 C 293.603 128.976 234.995 150.17 174.391 185.683 C 156.321 196.411 98.926 197.686 84.275 212.37 C 70.287 227.048 85.931 248.841 75.438 265.924 C 55.75 301.635 41.731 339.897 33.834 379.459 C 25.329 419.176 20.717 459.512 20.054 500 L 73.056 500 C 75.547 463.69 80.762 427.578 88.686 391.966 C 125.468 410.693 166.672 420.271 208.461 419.721 C 247.442 419.697 285.998 412.296 321.877 397.966 C 523.535 316.689 502.844 84.938 495.874 37.365 Z" />
  </Icon>
)
export default LeafIcon
