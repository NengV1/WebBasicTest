        $(function () {
            //jsonfile jquery

            let trstr = "";
            $.getJSON("./data/member.json", function (data) {
                $.each(data, function (key, val) {
                    trstr +=
                        `<tr>
                             <td>${val.id}</td>
                             <td>${val.first_name}</td>
                             <td>${val.last_name}</td>
                             <td>${val.email}</td>
                             <td>${val.gender}</td>
                             <td>${val.ip_address}</td>
                        </tr>`
                });

                $('table tbody').html(trstr);

            });

            // chart colors
            var colors = ['#007bff', '#28a745', '#333333', '#c3e6cb', '#dc3545', '#6c757d'];

            /* large line chart */
            var chLine = document.getElementById("chLine");
            var chartData = {
                labels: ["S", "M", "T", "W", "T", "F", "S"],
                datasets: [{
                        data: [589, 445, 483, 503, 689, 692, 634],
                        backgroundColor: 'transparent',
                        borderColor: colors[0],
                        borderWidth: 4,
                        pointBackgroundColor: colors[0]
                    },
                    {
                        data: [639, 465, 493, 478, 589, 632, 674],
                        backgroundColor: colors[3],
                        borderColor: colors[1],
                        borderWidth: 4,
                        pointBackgroundColor: colors[1]
                    }
                ]
            };

            if (chLine) {
                new Chart(chLine, {
                    type: 'line',
                    data: chartData,
                    options: {
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: false
                                }
                            }]
                        },
                        legend: {
                            display: false
                        }
                    }
                });
            }
        });