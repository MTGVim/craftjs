// pages/index.js

import React from "react";
import { Typography, Paper, Grid } from "@material-ui/core";

import { Toolbox } from "../components/Toolbox";
import { SettingsPanel } from "../components/SettingsPanel";
import { Topbar } from "../components/Topbar";

import { Container } from "../components/user/Container";
import { Button } from "../components/user/Button";
import { Card, CardTop, CardBottom } from "../components/user/Card";

import { Editor, Frame, Element } from "@craftjs/core";
import { Text } from "../components/user/Text";

export default function App() {
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
      >
        <Topbar />
        <Grid container spacing={3} style={{ paddingTop: "10px" }}>
          <Grid item xs>
            <Frame>
              <Element is={Container} padding={5} background="#eee" canvas>
                <Card />
                <Button size="small" variant="contained" color="primary">
                  Click
                </Button>
                <Text size="small" text="Hi world!" />
                <Element is={Container} padding={6} background="#999" canvas>
                  <Text size="small" text="It's me again!" />
                </Element>
              </Element>
            </Frame>
          </Grid>
          <Grid item xs={3}>
            <Paper>
              <Toolbox />
              <SettingsPanel />
            </Paper>
          </Grid>
        </Grid>
      </Editor>
    </div>
  );
}
