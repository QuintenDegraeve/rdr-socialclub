# Red Dead Redemption 2 SocialClub API
The original mantainer, nor I am affiliated with Rockstar Games or SocialClub in any way.<br />
Use this API at your own risk, it is a work in progress.

<!---
# Installation
Clone this repository and run `tsc` to compile (you need TypeScript installed, `npm i -g typescript`).
-->

The Rockstar SocialClub API `scapi.rockstar.com` can not be accessed without proper authentication with Rockstar SocialClub. 
This API provides an authentication server (Server) and REST server (Wrapper) around the official Rockstar SocialClub.

## Server
The `Server` in this repository will provide new endpoints that can be called to retrieve data from the official Rockstar SocialClub API. The `Server` is basically node between you and the SocialClub server.

You can start the server with `npm run server`. You will see a chromium browser popup (puppeteer) with the login page of SocialClub. After manually logging in, a new tab will open automatically.

Do **not** touch this browser instance anymore.
From now on, you are ready to go! Endpoints can not be access via `http://localhost:3000/{endpoint}` (`https` not supported yet).

## Wrapper
Accessing the `Server` with a browser or an application like postman is not the most desirable. A custom wrapper can be made to access the `Server`. Any programming language can be used, but this repository already contains a wrapper build in NodeJS (TypeScript). Examples can be found in the `Example` folder.

## Examples
Make sure the server is running, and start the example (please change the username to your username). The amount of commands is still very limited.
Example:
```
> modder dennisv2809
[   ] Modded money picked up ($2.6M)
[   ] Modded money income-outcome ($222.1M - $213.3M)
[   ] Modded money possession ($11,480,869 + $28,100)
[   ] Aimbot by accuracy (22.48%)
[   ] Aimbot by headshots players (591/3,203)
[   ] Aimbot by overall headshots (17.6K/38.8K)
[   ] Godmode based on K/D (1.90)
[   ] Modded stats (696/800)
[   ] Modded level (level 260 in 39d 0h 56m 50s)

> financial dennisv2809
Level: 260
Cash: $28,100
Bank: $11,480,869
Income: $222.1M
Expenses: $213.3M
Cash picked up: $2.6M
Job earnings: $97.4M
Time played: 39d 0h 56m 50s

> criminal dennisv2809
**Capital offenses**
Cops killed: 9,067
NOOSE killed: 1,322
Kills: 38.8K (17.6K headshots)
Player kills: 3,203 (591 headshots)
Overall accuracy: 22.48%
Kill Death Ratio: 1.90
Store hold ups: 39
Cars stolen: 882

**Other**
Top speeding-ticket: 173.47 mph (Tyrus)
Farthest wheelie: 3,238.29 ft
Farthest stoppie: 283.42 ft
Hit & run's: 39
Time wanted: 2d 13h 24m 4s

**Psychological report**
Sociopath
Psychopath
Weapon of choice: Marksman Rifle MK II

**WANTED DEAD OR ALIVE**
1172000
```

## Contributing
Please send a PR! I'd love to have a look at that!
