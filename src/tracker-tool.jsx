import {
  Avatar,
  Box,
  Button,
  Grid,
  Stack,
  Typography,
  useMediaQuery,
} from "@mui/material";
import MobileImage from "./components/ImageComponent/MobileImage";
import { useTheme } from "@emotion/react";
import LaptopImage from "./components/ImageComponent/LaptopImage";

const TrackerTool = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up("laptop"));
  return (
    <Grid
      container
      spacing={{
        mobile: 2,
        laptop: 6,
      }}
      sx={{
        mt: {
          laptop: "60px",
          mobile: "30px",
        },
      }}
    >
      {matches ? (
        <Grid item laptop={6}>
          <LaptopImage />
        </Grid>
      ) : (
        <Grid item mobile={12}>
          <MobileImage />
        </Grid>
      )}
      <Grid
        sx={{
          maxWidth: {
            mobile: "100%",
          },
        }}
        item
        mobile={12}
        laptop={6}
      >
        <Box
          variant="div"
          sx={{
            display: {
              mobile: "flex",
            },
            flexDirection: {
              mobile: "column",
            },
            gap: {
              mobile: "20px",
            },
          }}
        >
          <Box
            variant="div"
            sx={{ maxWidth: "220px", display: "flex", gap: "13px" }}
          >
            <Stack direction="row" spacing={2}>
              <Avatar sx={{ width: 45, height: 45 }} src="/images/canon.png" />
            </Stack>
            <Box
              variant="div"
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                lineHeight: "120%" /* 16.8px */,
              }}
            >
              <Typography
                sx={{
                  color: "#000",
                  fontSize: "14px",
                  fontStyle: "normal",
                  fontWeight: "700",
                  letterSpacing: "0.28px",
                }}
                variant="h5"
              >
                Jacob & Co
              </Typography>
              <Typography
                sx={{
                  color: "#4A4848",
                  fontSize: "11px",
                  fontStyle: "normal",
                  fontWeight: "400",
                  lineHeight: " 120%" /* 13.2px */,
                  letterSpacing: "0.22px",
                }}
                variant="p"
              >
                Creator
              </Typography>
            </Box>
          </Box>
          <Box
            variant="div"
            sx={{
              display: {
                mobile: "flex",
              },
              flexDirection: {
                mobile: "column",
              },
              gap: {
                mobile: "12px",
              },
            }}
          >
            <Typography
              sx={{
                color: "#000",
                fontSize: {
                  mobile: "20px",
                },
                fontStyle: "normal",
                fontWeight: "400",
                textTransform: "uppercase",
              }}
              variant="h5"
            >
              Luxury Stainless Watch
            </Typography>
            <Typography
              sx={{
                color: "#4A4848",
                fontSize: {
                  mobile: "12px",
                },
                fontStyle: "normal",
                fontWeight: "400",
                lineHeight: "160%",
              }}
              variant="h5"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lobortis
              facilisis tortor, ut molestie. In rhoncus aliquam dui, vitae
              sollicitudin justo, cursus maecenas. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Lobortis facilisis tortor, ut
              molestie. In rhoncus aliquam dui, vitae sollicitudin justo, cursus
              maecenas. In rhoncus aliquam dui, vitae sollicitudin justo, cursus
              maecenas.
              <div
                style={{
                  fontStyle: "normal",
                  fontWeight: "700",
                  lineHeight: "160%",
                }}
              >
                Read More
              </div>
            </Typography>
          </Box>
          <Box
            variant="div"
            sx={{
              maxWidth: "296px",
              display: {
                mobile: "flex",
              },
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "12px",
              }}
            >
              <Typography
                sx={{
                  color: "#4A4848",
                  fontSize: {
                    mobile: "12px",
                  },
                  fontStyle: "normal",
                  fontWeight: "400",
                  textTransform: "capitalize",
                }}
                variant="h5"
              >
                Current Owner
              </Typography>
              <div
                style={{
                  display: "flex",
                  gap: "5px",
                  alignItems: "center",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <Stack direction="row" spacing={2}>
                    <Avatar
                      sx={{ width: 30, height: 30 }}
                      src="/images/adam.png"
                    />
                  </Stack>
                  <Typography
                    sx={{
                      color: "#4A4848",
                      fontSize: {
                        mobile: "14px",
                      },
                      fontStyle: "normal",
                      fontWeight: "500",
                      textTransform: "capitalize",
                    }}
                    variant="h5"
                  >
                    Adam wick
                  </Typography>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={22}
                  height={22}
                  viewBox="0 0 22 22"
                  fill="none"
                >
                  <path
                    d="M11.7333 10.2666L18.3333 3.6666M18.3333 3.6666H14.4145M18.3333 3.6666V7.58535"
                    stroke="#0066B1"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M18.3334 11.0003C18.3334 14.4573 18.3334 16.1858 17.2595 17.2597C16.1855 18.3337 14.457 18.3337 11.0001 18.3337C7.54312 18.3337 5.81463 18.3337 4.74069 17.2597C3.66675 16.1858 3.66675 14.4573 3.66675 11.0003C3.66675 7.54336 3.66675 5.81488 4.74069 4.74093C5.81463 3.66699 7.54312 3.66699 11.0001 3.66699"
                    stroke="#0066B1"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <Button
              sx={{
                color: "#252222",
                background: "#C7C7C74D",
                fontSize: "12px",
                fontStyle: "normal",
                fontWeight: "500",
                px: "20px",
                py: "11px",
                lineHeight: "normal",
                maxHeight: "38px",
                alignSelf: "end",
              }}
              variant="contained"
              startIcon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={15}
                  height={17}
                  viewBox="0 0 15 17"
                  fill="none"
                >
                  <path
                    d="M13.9573 5.99405C13.1199 2.30932 9.90569 0.650391 7.08232 0.650391C7.08232 0.650391 7.08232 0.650391 7.07435 0.650391C4.25896 0.650391 1.03681 2.30134 0.199373 5.98607C-0.733773 10.1015 1.78652 13.5868 4.06754 15.7801C4.91296 16.5936 5.99764 17.0004 7.08232 17.0004C8.16701 17.0004 9.25169 16.5936 10.0891 15.7801C12.3702 13.5868 14.8904 10.1095 13.9573 5.99405ZM7.08232 9.98983C5.69457 9.98983 4.57001 8.86527 4.57001 7.47751C4.57001 6.08976 5.69457 4.9652 7.08232 4.9652C8.47008 4.9652 9.59464 6.08976 9.59464 7.47751C9.59464 8.86527 8.47008 9.98983 7.08232 9.98983Z"
                    fill="#252222"
                  />
                </svg>
              }
            >
              View map
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default TrackerTool;
