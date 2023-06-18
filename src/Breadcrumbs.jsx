import * as React from 'react';
import { Typography, Breadcrumbs, Link } from '@mui/material';
import { withRouter } from 'react-router-dom';


const BasicBreadcrumbs = (props) => {
  console.log('props', props);
  const { history, location: { pathname } } = props;
  // const { pathname } = location;

  const pathnames = pathname.split('/').filter(x => x);
  console.log(pathnames);

  return (

    <div role="presentation" >
      <Breadcrumbs aria-label="breadcrumb">

        {pathnames.length > 0 ? (
          <Link underline="hover" color="inherit" onClick={() => history.push('/')}>
            Home
          </Link>
        ) : (
          <Typography>Home</Typography>
        )
        }

        {pathnames.map((name, index) => {

          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;

          return (
            isLast
              ?
              (<Typography color="text.primary">{name}</Typography>)
              :
              (<Link underline="hover" color="inherit" onClick={() => history.push(routeTo)} key={index + name}>
                {name}
              </Link>)
          )
        }
        )
        }


      </Breadcrumbs>

    </div>
  )
};
//  not so tricky that javascript magic can solve

export default withRouter(BasicBreadcrumbs); 