
    const ensureAuthenticated=(req:any, res:any, next:any)=> {
      if (req.isAuthenticated()) {
        return next();
      }
      req.flash('error_msg', 'Please log in to view that resource');
      res.redirect('/users/login');
    }
    const forwardAuthenticated=(req:any, res:any, next:any) =>{
      if (!req.isAuthenticated()) {
        return next();
      }
      res.redirect('/service');      
    }
 
    export  {ensureAuthenticated,forwardAuthenticated};