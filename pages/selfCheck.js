import React from 'react'
import SelfChecks from '../utils/SelfCheckQuestions'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import UserNavbar from '../Components/userNavbar'



let SelfCheckQuestions=SelfChecks()

function selfCheck() {

    console.log(SelfCheckQuestions);
  return (
    <div>
        <UserNavbar/>
                <div className="px-3 md:px-8">
                    <h1 className="text-center">Take your self check now</h1>
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
      {
          SelfCheckQuestions.map((Q)=>{
              return(
                <div className="p-6">
                <Card sx={{ maxWidth: 300 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={Q.img}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                     {Q.disease_type}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                <button type="button"  class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">Take test</button>
                      
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
              </div>

                        
                        )
                    })
                }
                </div>
            </div>
        </div>


    </div>
  )
}

export default selfCheck