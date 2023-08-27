export const lineChartData = [
    {
        description: 'Below, you will find an illustration showcasing my proficiency in various programming languages across different domains. The graphic provides insights not only into the languages I am acquainted with but also the diverse topics within which I have applied my knowledge, rated on a scale from 0 to 100. While I acknowledge that continuous learning is essential for growth, I am committed to being a developer who diligently explores and researches to effectively fulfill both present and future responsibilities.',
        labels: [
            "Conditionals",
            "read files", 
            "applied IA", 
            "sync bd", 
            "training frecuency", 
            "interest", 
        ],
        datasets:  [
            {
                label: 'Python',
                data: [
                    100, //Conditionals
                    95, //read files
                    10, //applied IA
                    30, //sync bd
                    80, //training frecuency
                    90 //interest
                ],
                tension: 0.5,
                fill : true,
                borderColor: 'rgb(223, 206, 50)',
                backgroundColor: 'rgba(223, 206, 50, 0.5)',
                pointRadius: 5,
                pointBorderColor: 'rgba(223, 206, 50)',
                pointBackgroundColor: 'rgba(223, 206, 50)',
            },
            {
                label: 'Reactjs',
                data: [100, 65, 21, 100, 90, 97],
                tension: 0.5,
                fill : true,
                borderColor: 'rgb(50, 119, 223)',
                backgroundColor: 'rgba(50, 119, 223, 0.5)',
                pointRadius: 5,
                pointBorderColor: 'rgba(50, 119, 223)',
                pointBackgroundColor: 'rgba(50, 119, 223)',
            },
            {
                label: 'React Native',
                data: [100, 75, 20, 100, 98, 100],
                tension: 0.5,
                fill : true,
                borderColor: 'rgb(6, 99, 238)',
                backgroundColor: 'rgba(6, 99, 238, 0.5)',
                pointRadius: 5,
                pointBorderColor: 'rgba(6, 99, 238)',
                pointBackgroundColor: 'rgba(6, 99, 238)',
            },
            {
                label: 'Java',
                data: [100, 100, 8, 50, 40, 90],
                tension: 0.5,
                fill : true,
                borderColor: 'rgb(199, 156, 156)',
                backgroundColor: 'rgba(199, 156, 156, 0.5)',
                pointRadius: 5,
                pointBorderColor: 'rgba(199, 156, 156)',
                pointBackgroundColor: 'rgba(199, 156, 156)',
            },
        ]
    },
    {
        description: 'Below, you will find a line graph illustrating my proficiency levels in various areas. These include teamwork, discipline, motivation, willingness to learn and enhance my financial and social standing, organizational skills, initiative, and creativity. I would be delighted if you could reach out to me to join your team and elevate your project to new heights. I am enthusiastic about starting and learning alongside you.',
        labels: [
            "Team work",
            "Discipline", 
            "Motivation", 
            "Knowledge", 
            "Orderly", 
            "Initiative",
            "Creativity" 
        ],
        datasets:  [
            {
                label: 'Me',
                data: [
                    99, //Team Work
                    96, //Discipline
                    100, //Motivation
                    88, //Knowledge
                    95, //Orderly
                    90, //Initiative
                    100, //Creativity
                ],
                tension: 0.5,
                fill : true,
                borderColor: 'rgb(255,255,255)',
                backgroundColor: 'rgba(255,255,255, 0.5)',
                pointRadius: 5,
                pointBorderColor: 'rgba(255,255,255)',
                pointBackgroundColor: 'rgba(255,255,255)',
            },
        ]
    }
]

