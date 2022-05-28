
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {Flex, Box, Text , Button} from '@chakra-ui/react' ;

const Banner =({purpose, buttonText,linkName,imageURL,title2, title1,desc1,desc2 }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image  width="500" height="300" alt="banner" src={imageURL}/>
    <Box>
      <Text color="gray.500" fontSize="sm" fontWeight="medium"> {purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold"> {title1} <br/> {title2}</Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700" > {desc1} <br/> {desc2}</Text>      
      <Button fontSize="xl" bg="blue.300" >
          <Link href={linkName} >{buttonText}</Link>
      </Button>
      </Box>
  </Flex>
)

export default function Home() {
  return (
    <Box>
     
      <Banner
        purpose= "RENT A HOME" 
        title1="Rental Homes for"
        title2="Everyone"
        imageURL='/images/house1.jpg'
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more" 
        buttonText ="Explore Renting"
        linkName="/search?purpose=for-rent"
        
      />
        <Banner
        purpose= "BUY A HOME" 
        title1="Find, Buy & Own Your"
        title2="Dream Home"
        imageURL='/images/house2.jpg'
        desc1="Explore Apartments, Villas, Homes"
        desc2="and more" 
        buttonText ="Explore Buying"
        linkName="/search?purpose=for-sale"
        
      />
     
    </Box>
  )
}
