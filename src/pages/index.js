// pages/index.js

import React, { useState, useEffect } from "react";
import { Typography, Paper, Grid } from "@material-ui/core";

import { Toolbox } from "../components/Toolbox";
import { SettingsPanel } from "../components/SettingsPanel";
import { Topbar } from "../components/Topbar";

import { Container } from "../components/user/Container";
import { Button } from "../components/user/Button";
import { Card, CardTop, CardBottom } from "../components/user/Card";

import { Editor, Frame, Element } from "@craftjs/core";
import { Layers } from "@craftjs/layers";
import { Text } from "../components/user/Text";

export default function App() {
  const [initialState, setInitialState] = useState(null);

  // Load save state from server on page load
  useEffect(() => {
    setInitialState(
      "eyJST09UIjp7InR5cGXECHJlc29sdmVkTmFtZSI6IkNvbnRhaW5lciJ9LCJpc0NhbnZhcyI6dHJ1ZSwicHJvcHPENWJhY2tncm91bmQiOiIjZWVlIiwicGFkZGluZyI6NX0sImRpc3BsYXnRVSwiY3VzdG9tIjp7fSwiaGlkZGVuIjpmYWxzZSwibm9kZXMiOlsiQTVoTXdJMjNyxFhWZFN0eGl2UzhtIiwieWpZbElSVHl2TyIsIm9VbFJYTUdYTjYiXSwibGlua2VkTsZEe319LCJHR2JHMnY4aDIw/ADxYXJk7gDs5wCO9wDtZsUB7ADwM/IA8MRU7gDrcGFyZW50IjrmAYD5APv1AMgwX1o4SWotQlNp+wDIQnV0dG9u/gDKc2l6xCtzbWFsbCIsInZhcmlh5QCVY+cBoeUAtm9sb3IiOiJwcmltYXJ5IiwidGV4xCVDbGljayBt5AGUY2hpbGRy5ADAxhbEd+4BA+cAj/8BBf8BBewBBVBXTEhzeGM0a3X7AQVU5ACq/QED5wDMSGkgd29ybGQhIiwiZm9udFPlARoyMCzuASTxANfFYf8A1f8A1ewA1Wk5bGlmeEZlWmH/A5P/A5PxAqY5OTnsAqM2/wOT/wDO8wOjbUlaQ1M1RmNKSPYDfMsg/wGv/wGv5QGvSXQncyBtZSBhZ2Fpbv8BtP8BtO4A5usBgf8Buu8A4OsEo/8EXP8EXP8EXP8EXP8BtP4AyOgBXnZaRzhiZzRrVmoiLCJi5QO5cyI6ImxwekRXVFhHVkki5ADy6wWI/wSG/wSG/wSG/wSG/wSG/wSG/wEv/wH37QaA/wLX/wLX/wSG/wLS/wSG/wDV8ADV6wdI/wSG/wSG/wSG/wSG/wDO9ASGZzlUVVVBdEZFY/YEhssg/wGv/wGv/wSG/wG0/wG07AGB/wG67wDg6wO6/gSGVG9w/AG49QRmxDT3ALHtCaH4AZ1ESmdHVFBtMG9C9gGdyyD/AZ3/AZ3lAZ1TdWJ0aXRs5ACR6gGXMfIKjPwBiO0FCf8BiO0Ay+sFK/4BiEJvdMR3/wGL8QGLxzf/AY79AY5ISTFHTGx3QkL3B7HLIP8F3/8F3/8F3/8F3/YF30xlYXJuIG1vcmX/BeTxARzrAZr/AdPtARB9"
    );
  }, []);

  return (
    <div style={{ margin: "0 auto", width: "800px" }}>
      <Typography variant="h5" align="center">
        A super simple page editor
      </Typography>
      <Editor
        resolver={{
          Card,
          Button,
          Text,
          Container,
          Element,
          CardTop,
          CardBottom,
        }}
        enabled={false}
      >
        <Topbar initialState={initialState} />
        <Grid container spacing={3} style={{ paddingTop: "10px" }}>
          <Grid item xs>
            <Frame>
              <Element is={Container} padding={5} background="#eee" canvas />
            </Frame>
          </Grid>
          <Grid item xs={3}>
            <Paper>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>
          <Grid item xs={3}>
            <Layers />
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
}
