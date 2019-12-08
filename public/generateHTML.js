function generateHTML() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Document</title>
    
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
        <style>
            .container-fluid {
                background-color: #e84855;
                color: white;
                padding: 50px;
            }
    
            .container {
                padding: 50px;
            }
    
            .card {
                box-shadow: 5px 5px 5px #888888;
                max-width: 300px;
            }
    
            .card-header {
                background-color: dodgerblue;
                color: white;
                border-color: dodgerblue;
            }
    
            .card-body {
                background-color: #f5f6f8;
            }
            .sub-card {
                box-shadow: none;
            }
    
            .row {
                margin-bottom: 20px;
            }
    
        </style>
        <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js" integrity="sha384-J6qa4849blE2+poT4WnyKhv5vZF5SrPo0iEjwBvKU7imGFAV0wwj1yYfoRSJoZ+n" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js" integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js" integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6" crossorigin="anonymous"></script>
        <script src="https://kit.fontawesome.com/c58f8cf9af.js" crossorigin="anonymous"></script>
        <script src="./script.js" type="text/javascript"></script>
    </head>
    <body>
        <div class="container-fluid">
            <h1 class="text-center">My Team</h1>
        </div>
    
        <div class="container"></div>
    </body>
    </html>`
}

module.exports = generateHTML;