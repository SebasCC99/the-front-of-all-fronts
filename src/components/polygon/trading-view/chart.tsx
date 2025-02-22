"use client";

import { useEffect, useRef } from "react";

import { createChart, ColorType } from "lightweight-charts";

export default function TradingViewChart() {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chart = createChart(chartRef.current, {
        height: 300,
        width: chartRef?.current?.clientWidth,
        layout: {
          textColor: "black",
          background: { type: ColorType.Solid, color: "white" },
        },
        grid: {
          vertLines: {
            visible: false,
          },
          horzLines: {
            visible: false,
          },
        },
      });

      chart.timeScale().fitContent();

      const handleResize = () => {
        chart.applyOptions({ width: chartRef?.current?.clientWidth });
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        chart.remove();
      };
    }
  }, []);

  return <div ref={chartRef} className="box-content min-h-[300px]" />;
}
