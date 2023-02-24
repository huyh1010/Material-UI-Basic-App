import * as React from "react";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export default function JobCard({ job }) {
  const jobSkills = job;
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        bgcolor: "secondary.main",
        width: "100%",
        maxWidth: "350px",
        minWidth: "270px",
        height: "100%",
        border: 1,
        borderColor: "secondary.main",
        borderRadius: "8px",
      }}
    >
      <Box sx={{ my: 3, mx: 2 }}>
        <Grid container alignItems="center">
          <Grid item xs>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
              sx={{ fontSize: 20 }}
            >
              {job.title}
            </Typography>
          </Grid>
        </Grid>
        <Divider variant="middle" sx={{ bgcolor: "line.main" }} />
        <Box sx={{ m: 0.5 }}>
          <Stack direction="row" spacing={0.5} marginLeft={1.5}>
            {jobSkills.skills.slice(0, 4).map((skill) => (
              <Chip
                label={skill}
                sx={{ fontSize: "0.6em", color: "white", bgcolor: "#FF4500" }}
                size="small"
              />
            ))}
          </Stack>
        </Box>
        <Typography
          color="text.secondary"
          variant="body2"
          sx={{ textAlign: "left", mt: 2 }}
        >
          {job.description}
        </Typography>
        <Button
          onClick={() => navigate(`/job/${job.id}`)}
          sx={{
            bgcolor: "#ffc107",
            color: "black",
            height: "20px",
            p: 1.5,
            mt: 8,
          }}
        >
          LEARN MORE
        </Button>
      </Box>
    </Box>
  );
}
