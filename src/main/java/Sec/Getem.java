package Sec;
import java.util.ArrayList;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import Sec.User;
import Sec.Con;
public class Getem {

	public ArrayList<User> getValue(Con connection) throws Exception
	{
		ArrayList<User> list =new ArrayList<User>();
		
			Connection con = null;
				con = connection.getConnection();
			
		PreparedStatement ps=con.prepareStatement("select * from login");
		ResultSet rs=ps.executeQuery();
		
		while(rs.next())
		{
			User user=new User();
			user.setUser((rs.getString("username")));
			user.setPass((rs.getString("password")));
			list.add(user);
		}
		return list;
		
		
	}
	
	
	
}
