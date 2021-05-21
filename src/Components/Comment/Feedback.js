import React from 'react';
import { Divider, Grid, Paper } from "@material-ui/core";

const Feedback = ({ feedbacks }) => {
  return feedbacks.map(feedback => (
      <Paper style={{ padding: "10px 20px" }}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid justifyContent="left" item xs zeroMinWidth>
            <h4 style={{ margin: 0, textAlign: "left" }}>{feedback.feedback_by}</h4>
            <p style={{ textAlign: "left" }}>
              {feedback.feedback}
            </p>
          </Grid>
        </Grid>
        <Divider variant="fullWidth" style={{ margin: "30px 0" }} />
      </Paper>
    )
  )
};

export default Feedback;