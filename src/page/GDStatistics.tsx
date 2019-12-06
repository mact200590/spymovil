import React from 'react'
import { makeStyles } from '@material-ui/styles';
import { Typography } from '@material-ui/core';

interface Props {
    summary: { name: string, won: number, lost: number }[]
}

const GDStatistics = ({ summary }: Props) => {
    const classes = useStyles();
    const arr = [{ name: 'Ale', won: 3, lost: 4 }, { name: 'Ale', won: 3, lost: 4 }, { name: 'Ale', won: 3, lost: 4 }]

    return (
        <div className={classes.mainContainer}>
            <Typography variant="h4" color={"primary"} align="center">
                {"Statistics"}
            </Typography>
            <div className={classes.row}>
                <Typography
                    variant="h6"
                    color={"textSecondary"}
                    align="center"
                    className={classes.headRow}
                >
                    {"Player"}
                </Typography>
                <Typography
                    variant="h6"
                    color={"textSecondary"}
                    align="center"
                    className={classes.headRow}
                >
                    {"Won"}
                </Typography>
                <Typography
                    variant="h6"
                    color={"textSecondary"}
                    align="center"
                    className={classes.headRow}
                >
                    {"Lost"}
                </Typography>
            </div>
            {arr.map(item => (
                <div className={classes.row}>
                    <Typography
                        variant="body1"
                        color={"textSecondary"}
                        align="center"
                        className={classes.headRow}
                    >
                        {item.name}
                    </Typography>

                    <Typography
                        variant="body1"
                        color={"textSecondary"}
                        align="center"
                        className={classes.headRow}
                    >
                        {item.won}
                    </Typography>
                    <Typography
                        variant="body1"
                        color={"textSecondary"}
                        align="center"
                        className={classes.headRow}
                    >
                        {item.lost}
                    </Typography>
                </div>
            ))}
        </div>
    );
};

export default GDStatistics;

const useStyles = makeStyles(theme => ({
    mainContainer: {
        display: "flex",
        flexDirection: "column",
    },
    row: {
        display: "flex",
        flexDirection: "row"
    },
    headRow: {
        width: 50,
        paddingRight: 10,
        fontFamily: "sans-serif"

    }
}));
