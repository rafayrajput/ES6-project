        let Institute_Name = String(prompt("Name of Institute"))
        let Student = String(prompt("Name of student"))
        let Roll_Number = Number(prompt("Roll number of student"))
        let Class_Number = Number(prompt("Class of student"))
        let Course = String(prompt("Course of student"))
        let Html_score = Number(prompt("entre your score you obtained in HTML"))
        let Css_score = Number(prompt("entre your score you obtained in Css"))
        let React_score = Number(prompt("entre your score you obtained in React"))
        let Python_score = Number(prompt("entre your score you obtained in Python"))
        let obtained = Html_score + Css_score + React_score + Python_score
        let percentage = obtained / 500 *100

        var grade = ""

        if (percentage >=90){
            grade = "A+"
        }
        
        else if (percentage >= 80){
            grade = "A"
        }
        else if (percentage >= 70){
            grade = "B"
        }
        else if (percentage >= 60){
            grade = "C"
        }
        else if (percentage >= 50){
            grade = "D"
        }
        else {
        grade = "Fail"
        }


        //  alert("You obtained marks are " + obtained + " \n Your grade is " + grade + "\n Your percentage is " + percentage)
        alert(`
        ###############${Institute_Name}################
        ____________________________________________
        Student Name: ${Student}
        Roll Number: ${Roll_Number}
        Marks      : HTML Css JS React Python
                     ${Html_score} ${Css_score} ${React_score} ${Python_score} 
        Student Class: ${Class_Number}
        Student Course: ${Course}
        you obtained Marks ${obtained}
        Your grade is ${ grade}
        Your percentage is ${ percentage}`)