package Sec;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;

import Sec.Con;
public class adder {
	
	

	public void inser(Con connection,String u,String p) throws Exception
	{
		Connection con=connection.getConnection();
		String param="insert into login(username,password) values(?,?)";
		PreparedStatement ps=con.prepareStatement(param);
		ps.setString(1,u);
		ps.setString(2,p);
	ps.execute();
	
           
	}
	
	
	
	
}
