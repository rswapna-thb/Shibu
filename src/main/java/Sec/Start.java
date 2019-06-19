package Sec;

import java.util.ArrayList;

import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

import Sec.Getem;
import Sec.User;
import Sec.Con;


import java.io.IOException;  
import javax.servlet.ServletException;  
import javax.servlet.http.HttpServlet;  
import javax.servlet.http.HttpServletRequest;  
import javax.servlet.http.HttpServletResponse;  


@Path("/login")
public class Start {
	
	@POST
	@Consumes(MediaType.APPLICATION_FORM_URLENCODED)

	
	public String cont(@FormParam("username") String username,@FormParam("password") String password) throws Exception 
	{
		
		
		
		String c=Check(username,password);
		
		return c;
		
	}
	
	public String Check(String a ,String b) throws Exception
	{
		int flag=0;
		String status="";
		ArrayList<User> list=null;
		
		Getem c =new Getem();
		Con d=new Con();
		list=c.getValue(d);
		
		for(User u : list)
		{
			
			if(  ((u.getUser()).equals(a)) && ((u.getPassword()).equals(b))   )
			{
				
				flag=1;
				
			
			}
		}
		if(flag==1)
		{
			status="success";
		}
		else {
			//redirect here
			
			
			
			
			
			
			status="fail";
		}
		return status;
	}
	
	
	
}
