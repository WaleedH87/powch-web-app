import { useList } from "@pankod/refine-core";

import { Typography, Box, Stack } from "@pankod/refine-mui";

import { 
  PieChart,
  PropertyReferrals,
  TotalRevenue,
  PropertyCard,
  TopAgent
 } from 'components';
import { config } from "process";

const Home = () => {
  const { data, isLoading, isError } = useList({
    resource: 'properties',
    config: {
      pagination: {
        pageSize: 4
      }
    }
  });

  const latestProperties = data?.data ?? [];

  if(isLoading) return <div>Loading...</div>
  if(isError) return <div>Error</div>

  return (
    <Box>
      <Typography fontSize={25} fontWeight={700} color={"#11142D"}>
        Dashboard
      </Typography>

      <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
        <PieChart
          title="Properties for Sale"
          value={696}
          series={[75, 25]}
          colors={['#475BE8', '#E4E8EF']}
        />
        <PieChart
          title="Properties for Rent"
          value={575}
          series={[60, 40]}
          colors={['#FD8539', '#F2F6FC']}
        />
        <PieChart
          title="Total Customers"
          value={5972}
          series={[70, 30]}
          colors={['#2ED480', '#F2F6FC']}
        />
        <PieChart
          title="Properties per City"
          value={382}
          series={[85, 15]}
          colors={['#FE6D8E', '#F2F6FC']}
        />
      </Box>

      <Stack mt="25px" width="100%" direction={{xs: 'column', lg: 'row'}} gap={4}>
        <TotalRevenue />
        <PropertyReferrals />
      </Stack>  
      <Box
        flex={1}
        borderRadius="15px"
        padding="20px"
        bgcolor="#FAF9F6"
        display="flex"
        flexDirection="column"
        minWidth="100%"
        mt="25px"
      >
        <Typography fontSize={18} fontWeight={600} color={"#11142D"}>Latest Properties</Typography>

        <Box mt={2.5} sx={{ display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {latestProperties.map((property) => (
            <PropertyCard 
            key={property._id}
            id={property._id}
            title={property.title}
            price={property.price}
            location={property.location}
            photo={property.photo}
          />
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default Home