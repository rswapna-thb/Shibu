package Sec;
import Sec.Con;
import Sec.adder;
import javax.ws.rs.Consumes;
import javax.ws.rs.FormParam;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.core.MediaType;

@Path("/registration")
public class Registration{

@POST
@Consumes(MediaType.APPLICATION_FORM_URLENCODED)
public void enter(@FormParam("username") String username,@FormParam("password") String password ) throws Exception
{
	
	Con c=new Con();
	adder d=new adder();
	d.inser(c,username,password);
	
	
	
}
	
	
}
