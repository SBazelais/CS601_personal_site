let app = new Vue({
    el: "#resume",
    data: {
        name: "Steve Bazelais",
        title: "Software Developer",
        skills: ["Java", "Python", "HTML5", "CSS", "Javascript","Node.JS", "Command Line"],
        education: {
            degree: "Master of Science in Software Development",
            school: "Boston University",
            graduation: "2021"

                    },
         work: {
                company: "Bank of New York Mellon",
                role: "Fund Accounting Analyst"
         }           

    }
})