function premierLeagueStandings(teamStandings) {

    const firstTeam = teamStandings[1];

    const otherTeams = Object.values(teamStandings).filter(team => team !== firstTeam);

    otherTeams.sort();

    const newStandings = {1: firstTeam};
    for (let i = 0; i < otherTeams.length; i++) {
        newStandings[i + 2] = otherTeams[i];
    }

    return newStandings;
}