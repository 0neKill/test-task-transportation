export interface Waypoint {
    code: 'Ok',
    routes: [
        {
            legs: [
                {
                    steps: [
                        {
                            intersections: [
                                {
                                    location: [number, number]
                                },

                            ],
                        },
                    ],
                }
            ],
        }
    ]
}
