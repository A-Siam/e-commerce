import { Palette } from "color-thief-react";
import { useEffect, useState } from "react";
import tinyColor from "tinycolor2"

export default function IndexPage() {
  /**
   * 
   * @param color 
   * @returns true if dark
   */
  function isDark(color: string) {
    const tc = tinyColor(color)
    return tc.getLuminance() < 0.5 
  }
  return (
    <Palette format="hex" src={"/tsh.png"} colorCount={4}>
      {({ data, loading, error }) => {
        if (error) { throw error; }
        if (loading) { return <div>Loading</div> }
        return <div>
          <div style={{ backgroundColor: data[0], height: 50, width: 50 }}>
            {isDark(data[0])}
          </div>
          <div style={{ backgroundColor: data[1], height: 50, width: 50 }}>
            {isDark(data[1])}
          </div>
          <div style={{ backgroundColor: data[2], height: 50, width: 50 }}>
            {isDark(data[2])}
          </div>
          <div style={{ backgroundColor: data[3], height: 50, width: 50 }}>
            {isDark(data[3])}
          </div>
        </div>
      }}
    </Palette>
  )
}