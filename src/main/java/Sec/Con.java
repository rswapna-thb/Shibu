package Sec;

import java.sql.*;

public class Con {
	public Connection getConnection() throws Exception
	{
	try
	{
	String connectionURL = "jdbc:mysql://localhost:3306/User";
	Connection connection = null;
	Class.forName("com.mysql.jdbc.Driver").newInstance();
	connection = DriverManager.getConnection(connectionURL, "shibuthomas", "shibu#");
	return connection;
	}
	catch (SQLException e)
	{
	throw e;
	}
	catch (Exception e)
	{
	throw e;
	}
	}
	 
	}
	
	
	

