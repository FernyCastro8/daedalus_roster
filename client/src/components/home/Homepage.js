import { Box, Button, Flex, Grid, GridItem, Heading, Image, Link, Text, FormControl, Input, FormLabel, useTheme} from "@chakra-ui/react";
import {  EmailIcon } from '@chakra-ui/icons';
function Homepage() {

    const theme = useTheme()
    return(
        <Grid templateColumns='repeat(12, 1fr)'
        
        >
            <GridItem 
            colSpan={{ base: 12, lg: 8, xl: 9 }}
            bgGradient={`radial-gradient(circle, ${theme.colors['100']}, ${theme.colors['200']}, gray.900)`}
            >
                <Flex 
                justifyContent='center' 
                alignItems='center' 
                flexDirection='column'
                minHeight={{ lg: '100vh'}}
                >
                    <Heading>
                        Daedalus.Roster
                    </Heading>
                    <Text>
                        Navigate the job market
                    </Text>
                    <Box w={{ sm: '200px', md: '400px', lg: "600px"}} h={{ sm: '200px', md: '400px', lg: "600px"}}>
                        <Image src={process.env.PUBLIC_URL + "/MazeIcon.png"} alt="Maze" objectFit="cover" />
                    </Box>
                </Flex>
                
            </GridItem>
            
            <GridItem 
            colSpan={{ base: 12, sm: 12, lg: 4, xl: 3}}
            >
                <Box as="form" method="POST" 
                maxW='100%' p='1rem' minHeight='100vh'
                bg='gray.900' color={theme.colors[100]} border={`1px solid ${theme.colors[200]}`}
                >
                    <Heading textAlign='center'>Start Searching</Heading>
                    <FormControl isRequired mb='40px'>
                        <FormLabel>Name:</FormLabel>
                        <Input type='text' name='name' placeholder="Enter your name..."/>
                    </FormControl>

                    <FormControl isRequired mb='40px'>
                        <FormLabel>Email:</FormLabel>
                        <Input type='email' name='email' placeholder="Enter your email..."/>
                    </FormControl>

                    <FormControl isRequired mb='40px'>
                        <FormLabel>Password:</FormLabel>
                        <Input type='password' name='password' placeholder="Create a password..."/>
                    </FormControl>

                    <Flex alignItems='center' justifyContent='center' flexDirection='column' gap={1}>
                    <Flex gap={1} alignItems="center">
                        <Text>Already a member?</Text>
                        <Link color="gray.400">Login here</Link>
                    </Flex>

                        <Button type='submit' bg={theme.colors[100]} color='gray.900'>Submit</Button>
                    </Flex>
                </Box>

            </GridItem>

            
        </Grid>
    )
}

export default Homepage