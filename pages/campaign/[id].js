import { useRouter } from "next/router";
import { useState } from "react";
import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { FormControl } from "@mui/material";
import { FormLabel } from "@mui/material";
import { Input } from "@mui/material";
import { FormHelperText } from "@mui/material";
import { Button } from "@mui/material";
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import styles from "../../styles/Campaign.module.css"
import {ethers, Contract} from 'ethers'
import CampaignArtifact from "../../artifacts/contracts/Campaign.sol/Campaign.json";
import { useEffect } from "react";
import PrimarySearchAppBar from "../../components/home/Appbar"
import { useMoralis } from "react-moralis";

export default function Home(props) {
  //   const { isAuthenticated } = useMoralis();
  var customHttpProvider = new ethers.providers.JsonRpcProvider("http://localhost:8545");
  const [convert, setConvert] = useState(null);
  const { isAuthenticated } = useMoralis();
  const router = useRouter();
  const { id } = router.query;

  async function _intializeContract(init, artifacts,address) {
    console.log(id)
    const contract = new Contract(
      address,
      artifacts,
      init
    );
    return contract
  }

  useEffect(async () => {
    if (id!=undefined){
    const campaignContract = await _intializeContract(customHttpProvider,CampaignArtifact.abi,id)
    console.log(await campaignContract.getDetails())
    }
  })

  return (
    <div>
      <PrimarySearchAppBar isAuthenticated ={isAuthenticated}/>
      <Box sx={{ flexGrow: 1 }} className={styles.boxer}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          spacing={12}
          className={styles.main}
        >
          <Grid item xl={5} lg={5} md={6} sm={6} xs={12}>
            <Stack>
              <Typography variant="h3" fontWeight={'bold'} gutterBottom component="div">
                Covid Relief Fund
              </Typography>
              <Typography variant="subtitle1" gutterBottom component="div">
                This Campaign is to Donate Funds for Covid Relief in India, the
                situation. The manager is https://twitter.com/harshbadhai28 and
                all the receives will go to ABCD Foundation which will help in
                buying, delivering oxygen, and other covid related help. If you
                want to withdraw funds from this campaign please feel free to
                create a request, and ping me on Twitter so that I can help you
                get the funds as soon as possible.
              </Typography>
            </Stack>
            <br/>
            <Grid
              container
              wrap="nowrap"
              direction="column"
              alignItems="stretch"
              gap={2}
            >
              <Grid item>
                <Card style={{ border: "1px solid" }}>
                  <CardContent>
                    <Typography variant="subtitle1" component="div">
                      Minimum Contribution
                    </Typography>
                    <Typography variant="subtitle1" fontWeight={'bold'} component="div">
                      0.001 ETH ($2.82)
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs zeroMinWidth>
                <Card style={{ border: "1px solid" }}>
                  <CardContent>
                    <Typography variant="h5" component="div" noWrap>
                      Wallet Address of Campaign Creator
                    </Typography>
                    <Typography variant="h5" fontWeight={'bold'} component="div" noWrap>
                      0x5d7676dB6119Ed1F6C696419058310D16a734d
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card style={{ border: "1px solid" }}>
                  <CardContent>
                    <Typography variant="h6" component="div">
                      Number of Requests
                    </Typography>
                    <Typography variant="h5" fontWeight={'bold'} component="div">
                      5
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card style={{ border: "1px solid" }}>
                  <CardContent>
                    <Typography variant="h5"  component="div">
                      Number of Approvers
                    </Typography>
                    <Typography variant="h5" fontWeight={'bold'} component="div">
                      20
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xl={5} lg={5} md={6} sm={6} xs={12} width={'100%'}>
            <Grid container direction="column" alignItems="stretch" gap={4} className={styles.another}>
              <Grid item>
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Campaign Balance
                    </Typography>
                    <Typography variant="h5" fontWeight={'bold'} component="div">
                      12.75 ETH($35751.51)
                    </Typography>
                    <Typography variant="h5" component="div">
                      target of 11999 ETH ($33645675.96)
                    </Typography>
                    <LinearProgress variant="determinate" value={convert}></LinearProgress>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card>
                  <CardContent>
                    <Typography variant="h5" component="div">
                      Contribute Now!
                    </Typography>
                    <Box sx={{ width: "100%" }}>
                      <form>
                        <FormControl id="value" style={{ width: "100%" }}>
                          <FormLabel>
                            Amount in Ether you want to contribute
                          </FormLabel>
                          <Input
                            type="number"
                            step="any"
                            min="0"
                            onChange={(e) => {
                              setConvert(Math.abs(e.target.value));
                            }}
                          />
                          {convert ? (
                            <FormHelperText>{convert}</FormHelperText>
                          ) : null}
                        </FormControl>
                      </form>
                    </Box>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item>
                <Card>
                  <CardContent>
                    <Button
                      variant="contained"
                      href="#"
                      style={{ width: "100%" }}
                    >
                      View Withdrawal Request
                    </Button>
                    <Typography variant="body1" component="div">
                      * You can see where these funds are being used & if you
                      have contributed you can also approve those Withdrawal
                      Requests :)
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
