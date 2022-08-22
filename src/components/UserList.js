import React, {useEffect}  from 'react'
import {fetchAllUsers} from '../store/slices/users';
import {useDispatch, useSelector} from 'react-redux'
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography';


const UserList = () => {

    const { list:users } = useSelector(state => state.users)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch])

  return (
        <Grid container style={{justifyContent: "center"}} spacing={3}>
            {
            users.map((user, index) => (
                <Grid item key={index} xl={3}>
                    <Card variant="outlined" style={{minHeight: "225px", minWidth:"300px",background:"lightgray", borderRadius:"18px"}}>
                        <Container>
                            <img src={user.avatar} alt="avatar"/>   
                        </Container>
                        <Container>
                            <Typography variant="h4" > {`${user.first_name} ${user.last_name}`} </Typography>
                            <Typography variant="h6" mb={1}> {user.email} </Typography>
                        </Container>
                        </Card>
                </Grid>
            ))}
        </Grid>
  )
}

export default UserList