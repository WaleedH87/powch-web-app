import ReactApexChart from 'react-apexcharts';

import { Box, Typography, Stack } from '@pankod/refine-mui';
import { arrow } from "assets";

import { TotalRevenueOptions, TotalRevenueSeries } from './chart.config';

const TotalRevenue = () => {
  return (
    <Box
      p={4}
      flex={1}
      bgcolor="#FAF9F6"
      id="chart"
      display="flex"
      flexDirection="column"
      borderRadius="15px"
    >
    <Typography fontSize={18} fontWeight={600} color={"#11142D"}>
      Total Revenue  
    </Typography> 

    <Stack my={2} direction="row" gap={4} flexWrap="wrap">
      <Typography fontSize={28} fontWeight={700} color={"#11142D"}>
        £275,727
      </Typography>
      <Stack direction="row" alignItems="center" gap={1}>
        <img
          src={arrow}
          alt='arrowup'
          width="20px"
        />
        <Stack>
          <Typography fontSize={15} color="#475BE8">
            0.8%
          </Typography>
          <Typography fontSize={12} color="#808191">
            vs. Last Month
          </Typography>
        </Stack>
      </Stack>  
    </Stack>

    <ReactApexChart 
      series={TotalRevenueSeries}
      type='bar'
      height={310}
      options={TotalRevenueOptions}
    />
    </Box>
  )
}

export default TotalRevenue