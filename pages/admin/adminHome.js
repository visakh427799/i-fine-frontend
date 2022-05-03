import React from 'react'
import AdminNavbar from '../../Components/adminNavbar'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function adminHome() {
  return (
    <div>
        <AdminNavbar/>
    <div className="container mx-auto max-w-full">
   <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4 pt-4">
   <div className="ml-4">
   <Card sx={{ maxWidth: 280 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="primary">
        <div class="flex space-x-2 justify-center">
  <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center">
    All users
    <span class="inline-block py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-600 text-white rounded ml-2">7</span>
  </button>
</div>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      <CardActions>
       
        
      </CardActions>
    </Card>
    </div>
    <div className="ml-4">
   <Card sx={{ maxWidth: 280 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="primary">
        <div class="flex space-x-2 justify-center">
  <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center">
    All users
    <span class="inline-block py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-600 text-white rounded ml-2">7</span>
  </button>
</div>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      <CardActions>
       
        
      </CardActions>
    </Card>
    </div> <div className="ml-4">
   <Card sx={{ maxWidth: 280 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="primary">
        <div class="flex space-x-2 justify-center">
  <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center">
    All users
    <span class="inline-block py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-600 text-white rounded ml-2">7</span>
  </button>
</div>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      <CardActions>
       
        
      </CardActions>
    </Card>
    </div> <div className="ml-4">
   <Card sx={{ maxWidth: 280 }}>
      
      <CardContent>
        <Typography gutterBottom variant="h5" component="div" color="primary">
        <div class="flex space-x-2 justify-center">
  <button type="button" class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-600 hover:shadow-lg focus:bg-blue-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center">
    All users
    <span class="inline-block py-1 px-1.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-green-600 text-white rounded ml-2">7</span>
  </button>
</div>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          
        </Typography>
      </CardContent>
      <CardActions>
       
        
      </CardActions>
    </Card>
    </div>

   </div>
   </div>
    </div>
  )
}

export default adminHome