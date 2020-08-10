var students = { 
                    StudentsId: [1,2,3,4,5], 
                    Name: ['N.K Mishra','Kirtee','Mansi Saxcena','Anchal Singh','sarthak JAIN'], 
                    Course: ['MCA','MCA','MCA','MCA','MCA'], 
                    Gender:['Male','Female','Female','Female','Male'],
                    Email:['NK.Mishra@sgei.org','kirtee@sgei.org','Mansi@gmail.com','AnchalSingh@gmail.com','sarthakjain31797@gmail.com'],
                }; 
  

// alert(students['Email'][2]);

function VisibleStudentsTable()
{
	document.getElementById("popUp").style.display="block";
}

function HideStudentsTable()
{
	document.getElementById("popUp").style.display="none";
}

function querySubmit()
{
	qry = document.getElementById("queryPlace").value;
	
	if(qry.toLowerCase() == "describe students;")
	{
		document.getElementById("describeTable").style.display="block";
	}
	else
	{
		document.getElementById("describeTable").style.display="none";	
		let regx = /Update Students Set(^[['StudentsId']*=[A-Z a-z 0-1]*,['Name']*=[A-Z a-z]*,['Course']*=[A-Z a-z]*,['Gender']*=[A-Z a-z]*,['Email']*=[A-Z a-z 0-1 @ .]*]+ where [['StudentsId']*=[A-Z a-z 0-1]*,['Name']*=[A-Z a-z]*,['Course']*=[A-Z a-z]*,['Gender']*=[A-Z a-z]*,['Email']*=[A-Z a-z 0-1 @ .]*]+)$/;
	}
}

