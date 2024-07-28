"use client";
import React, { useEffect, useRef, useState } from "react";
import Splitting from "splitting";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import useIntersection from "./useIntersection";

type Line = {
  position: number;
  cells: Cell[];
};

type Cell = {
  DOM: {
    el: HTMLElement | null;
  };
  position: number;
  previousCellPosition: number;
  original: string;
  state: string;
  color: string;
  originalColor: string;
  cache: any;
};

type TypeShuffleProps = {
  text?: string;
  children?: React.ReactNode;
  effect: string;
  triggerOnce?: boolean;
  triggerOnHover?: boolean;
};

const TypeShuffle: React.FC<TypeShuffleProps> = ({
  text,
  effect,
  children,
  triggerOnce = false,
  triggerOnHover = false,
}) => {
  const textRef = useRef<HTMLDivElement>(null);
  const linesRef = useRef<Line[]>([]);
  const totalCharsRef = useRef(0);
  const isAnimatingRef = useRef(false);
  const [containerRef, isIntersecting] = useIntersection({
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  });
  const [hasAnimated, setHasAnimated] = useState(false);
  const [containerHeight, setContainerHeight] = useState<number | undefined>(
    undefined
  );

  useEffect(() => {
    if (!textRef.current) return;

    // Set initial height
    setContainerHeight(textRef.current.clientHeight);

    // Apply Splitting
    const results = Splitting({
      target: textRef.current,
      by: "lines",
    });
    results.forEach((s) => Splitting({ target: s.words }));

    const lines: Line[] = [];
    let totalChars = 0;

    for (const [linePosition, lineArr] of results[0].lines.entries()) {
      const line: Line = { position: linePosition, cells: [] };
      let cells: Cell[] = [];
      let charCount = 0;

      for (const word of lineArr) {
        for (const char of Array.from(word.querySelectorAll(".char"))) {
          const cell: Cell = {
            DOM: { el: char },
            position: charCount,
            previousCellPosition: charCount === 0 ? -1 : charCount - 1,
            original: char.innerHTML,
            state: char.innerHTML,
            color: getComputedStyle(document.documentElement).getPropertyValue(
              "--color-text"
            ),
            originalColor: getComputedStyle(
              document.documentElement
            ).getPropertyValue("--color-text"),
            cache: null,
          };
          cells.push(cell);
          ++charCount;
        }
      }

      line.cells = cells;
      lines.push(line);
      totalChars += charCount;
    }

    linesRef.current = lines;
    totalCharsRef.current = totalChars;
  }, [text]);

  useEffect(() => {
    if (isIntersecting && (!triggerOnce || (triggerOnce && !hasAnimated))) {
      triggerEffect(effect);
      if (triggerOnce) setHasAnimated(true);
    }
  }, [isIntersecting, effect, triggerOnce, hasAnimated]);

  const clearCells = () => {
    for (const line of linesRef.current) {
      for (const cell of line.cells) {
        cell.state = "&nbsp;";
        if (cell.DOM.el) cell.DOM.el.innerHTML = cell.state;
      }
    }
  };

  const getRandomChar = () => {
    const lettersAndSymbols =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$&*()-_+=/[]{};:<>,0123456789";
    return lettersAndSymbols.charAt(
      Math.floor(Math.random() * lettersAndSymbols.length)
    );
  };

  const triggerEffect = (effect: string) => {
    if (isAnimatingRef.current) return;
    isAnimatingRef.current = true;

    const effects: { [key: string]: Function } = {
      fx1: () => fx1(),
    };

    if (effects[effect]) effects[effect]();
  };

  const fx1 = () => {
    const MAX_CELL_ITERATIONS = 45;
    let finished = 0;

    clearCells();

    const loop = (line: Line, cell: Cell, iteration = 0) => {
      cell.cache = cell.state;

      if (iteration === MAX_CELL_ITERATIONS - 1) {
        cell.state = cell.original;
        if (cell.DOM.el) cell.DOM.el.innerHTML = cell.state;
        ++finished;
        if (finished === totalCharsRef.current) {
          isAnimatingRef.current = false;
        }
      } else if (cell.position === 0) {
        cell.state =
          iteration < 9
            ? ["*", "-", "'", '"'][Math.floor(Math.random() * 4)]
            : getRandomChar();
        if (cell.DOM.el) cell.DOM.el.innerHTML = cell.state;
      } else {
        cell.state = line.cells[cell.previousCellPosition].cache;
        if (cell.DOM.el) cell.DOM.el.innerHTML = cell.state;
      }

      if (cell.cache !== "&nbsp;") {
        ++iteration;
      }

      if (iteration < MAX_CELL_ITERATIONS) {
        setTimeout(() => loop(line, cell, iteration), 15);
      }
    };

    for (const line of linesRef.current) {
      for (const cell of line.cells) {
        setTimeout(() => loop(line, cell), (line.position + 1) * 200);
      }
    }
  };

  // Implement other fx2, fx3, fx4, fx5, fx6 here in a similar way...

  const handleMouseEnter = () => {
    if (triggerOnHover) {
      triggerEffect(effect);
    }
  };

  return (
    <span
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      style={{ height: containerHeight }}
    >
      <span ref={textRef}>{children ? children : text}</span>
    </span>
  );
};

export default TypeShuffle;
