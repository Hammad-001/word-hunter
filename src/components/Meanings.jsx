import React from "react";
import { Grid, Typography } from "@mui/material";
// import {Divider} from "@mui/material";

const Meanings = (props) => {
  return (
    <>
      {props.meaning.meanings.map((mean) =>
        mean.definitions.map((def, index) => (
          <Grid
            item
            key={index}
            sx={{
              backgroundColor: "white",
              color: "black",
              borderRadius: "2vw",
              padding: "1.5vw",
              margin: "1vw 1vw 0vw 1vw",
            }}
          >
            <Grid xs={12} item sx={{ padding: "1vw" }}>
              <Typography
                variant="h4"
                sx={{ textAlign: "justify", fontSize: "2vw" }}
              >
                <b>Part of Speech: </b>
                {mean.partOfSpeech.trim(" (heading) ")}
              </Typography>
              <Typography
                variant="h4"
                sx={{ textAlign: "justify", fontSize: "2vw" }}
              >
                <b>Definition: </b>
                {def.definition.trim(" (heading) ")}
              </Typography>
              {/* {def?.example?.length > 0 ||
              def?.synonyms?.length > 0 ||
              def?.antonyms?.length > 0 ? (
                <Divider
                  style={{
                    width: "100%",
                    backgroundColor: "white",
                    margin: "0.5vh 0vw",
                  }}
                />
              ) : null} */}
              {def.example && (
                <Grid xs={12} item>
                  <Typography
                    variant="h4"
                    sx={{ textAlign: "justify", fontSize: "2vw" }}
                  >
                    <b>Examples: </b>
                    {def.example}
                  </Typography>
                </Grid>
              )}
              {def.synonyms.length !== 0 && (
                <Grid xs={12} item>
                  <Typography
                    variant="h4"
                    sx={{ textAlign: "justify", fontSize: "2vw" }}
                  >
                    <b>Synonyms: </b>
                    {def.synonyms.map((sy) => sy + ", ")}
                  </Typography>
                </Grid>
              )}
              {def.antonyms.length !== 0 && (
                <Grid xs={12} item>
                  <Typography
                    variant="h4"
                    sx={{ textAlign: "justify", fontSize: "2vw" }}
                  >
                    <b>Antonyms: </b>
                    {def.antonyms.map((sy) => sy + ", ")}
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Grid>
        ))
      )}
    </>
  );
};

export default Meanings;
