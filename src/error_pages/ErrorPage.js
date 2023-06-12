// Drag Area
// https://codesandbox.io/s/framer-motion-drag-with-constraints-pjn6t?file=/src/styles.css
import { useRouteError } from "react-router-dom";
import { useRef } from "react";
import { motion } from "framer-motion";
import "./ErrorPage.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  const constraintsRef = useRef(null);

  return (
    <>
      <div className="statement" id="error-page">
        <motion.h1 className="statements" drag>
          OOOOOOOOOOOOF!
        </motion.h1>
        <motion.p className="statements" drag>
          This page does not exist!
        </motion.p>
        <motion.p className="statements" drag>
          <i>{error.statusText || error.message}</i>
        </motion.p>
        <motion.p className="statements" drag>
          Feel free to play with this square thing tho
        </motion.p>
      </div>
      <div className="greater-tri-state-area">
        <motion.div className="drag-area" ref={constraintsRef} />
        <motion.div
          className="example-container"
          drag
          dragConstraints={constraintsRef}
          whileTap={{ scale: 0.9, cursor: "grabbing" }}
        />
      </div>
    </>
  );
}
