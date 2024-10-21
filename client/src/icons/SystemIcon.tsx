import {FC} from "react"

interface SystemIconProps {
  effectiveTheme: string;
  toggleTheme: ()=> void;
} 

const SystemIcon:FC<SystemIconProps> = ({effectiveTheme,toggleTheme}) =>{

return (
  <>
    <svg
      version='1.0'
      xmlns='http://www.w3.org/2000/svg'
      width={30}
      height={30}
      viewBox='0 0 512.000000 512.000000'
      preserveAspectRatio='xMidYMid meet'
      onClick={toggleTheme}
    >
      <g
        transform='translate(0.000000,512.000000) scale(0.100000,-0.100000)'
        fill={effectiveTheme === "dark" ? "#ffff" : "#0000"}
        stroke='none'
      >
        <path
          d='M378 4989 c-171 -40 -322 -209 -363 -404 -22 -104 -22 -2975 0 -3078
43 -203 195 -369 373 -406 66 -14 680 -15 716 -1 61 23 79 112 32 159 l-26 26
-348 5 c-334 5 -349 6 -388 27 -56 30 -119 103 -146 172 l-23 56 0 960 0 960
2173 3 2172 2 0 -510 0 -510 -37 0 c-46 0 -118 -32 -154 -66 l-27 -26 -68 30
c-38 16 -79 33 -91 36 -17 5 -23 17 -28 59 -12 88 -55 151 -129 189 -48 25
-223 36 -311 19 -109 -20 -181 -97 -192 -204 l-5 -53 -89 -38 -89 -38 -31 27
c-54 44 -90 58 -154 58 -41 0 -72 -6 -100 -21 -54 -28 -220 -198 -240 -244
-31 -76 -9 -186 50 -248 l25 -26 -39 -89 -39 -90 -53 -5 c-62 -7 -103 -26
-140 -67 -53 -57 -63 -88 -67 -230 l-4 -133 -310 0 -310 0 -29 -29 c-49 -49
-35 -128 28 -160 15 -8 156 -11 455 -11 l433 0 38 -90 39 -91 -30 -33 c-63
-72 -78 -176 -36 -258 26 -51 185 -205 235 -228 62 -28 133 -26 196 5 28 14
58 34 67 44 16 18 20 17 105 -18 l89 -36 11 -65 c14 -84 50 -135 120 -172 50
-26 60 -28 183 -28 72 0 148 5 169 11 84 26 146 107 156 205 3 30 11 54 17 54
6 0 47 16 91 35 l79 35 31 -30 c63 -61 171 -78 250 -40 52 25 220 195 240 243
32 78 13 182 -45 242 l-30 31 35 79 c19 44 35 86 35 93 0 7 14 12 36 12 65 0
117 22 164 70 59 59 70 98 70 258 0 123 -2 133 -28 183 -38 73 -92 110 -172
118 l-62 6 -23 61 c-13 34 -30 75 -39 92 -14 27 -14 31 0 43 9 7 29 36 45 64
53 92 37 192 -46 284 l-34 37 -3 1125 -3 1124 -27 81 c-47 136 -145 261 -246
313 -105 54 0 51 -2112 50 -1092 -1 -1972 -5 -1992 -10z m3975 -205 c61 -21
126 -84 163 -160 l29 -59 3 -447 3 -448 -2176 0 -2176 0 3 438 c3 427 4 438
26 493 37 92 111 165 192 190 14 4 894 8 1956 8 1743 1 1935 -1 1977 -15z
m-413 -2366 c0 -49 6 -84 18 -108 15 -32 26 -38 112 -66 52 -17 132 -50 177
-72 46 -23 93 -42 106 -42 28 0 58 20 120 79 l47 45 75 -74 c41 -41 75 -79 75
-85 0 -6 -22 -33 -50 -60 -27 -27 -55 -64 -61 -82 -10 -31 -7 -42 39 -136 28
-56 60 -134 71 -173 30 -101 50 -117 159 -124 l87 -5 3 -99 c2 -64 -1 -103 -9
-112 -8 -10 -35 -14 -89 -14 -104 0 -119 -12 -155 -127 -15 -49 -47 -127 -72
-175 -41 -79 -44 -89 -34 -120 6 -19 34 -56 61 -83 28 -27 50 -54 50 -60 0
-13 -142 -155 -156 -155 -5 0 -34 25 -64 55 -74 75 -92 77 -198 22 -48 -25
-126 -57 -174 -71 -115 -35 -128 -51 -128 -156 0 -54 -4 -81 -14 -89 -9 -8
-48 -11 -112 -9 l-99 3 -5 87 c-7 109 -23 129 -124 159 -39 12 -116 44 -171
71 -91 46 -102 49 -135 39 -19 -6 -57 -33 -85 -61 -27 -27 -54 -50 -60 -50 -6
0 -43 33 -84 74 -81 81 -83 92 -22 135 36 26 71 81 71 111 0 13 -20 62 -44
109 -24 47 -54 120 -66 161 -33 109 -50 124 -158 130 l-87 5 -3 113 -3 112 73
0 c49 0 84 6 108 18 32 15 38 26 70 122 20 58 53 136 73 174 20 38 37 78 37
88 0 30 -25 70 -74 118 -25 24 -46 49 -46 54 0 17 133 146 150 146 9 0 34 -18
55 -41 46 -47 84 -69 119 -69 13 0 63 20 109 44 47 25 118 55 159 66 50 15 82
31 101 51 25 27 27 36 27 107 0 43 3 82 7 85 3 4 55 7 115 7 l108 0 0 -72z'
        />
        <path
          d='M850 4555 c-62 -17 -146 -71 -177 -113 -56 -76 -68 -113 -68 -212 0
-79 4 -103 23 -141 37 -75 87 -125 159 -161 59 -29 77 -33 148 -33 67 0 90 5
140 28 77 36 147 110 175 185 30 78 25 196 -10 267 -70 144 -239 221 -390 180z
m172 -222 c61 -55 63 -146 5 -200 -46 -42 -94 -51 -144 -27 -93 46 -110 159
-34 228 41 38 131 37 173 -1z'
        />
        <path
          d='M1729 4557 c-173 -49 -279 -213 -248 -384 21 -114 89 -201 198 -252
79 -37 191 -37 272 1 72 33 134 94 168 167 22 47 26 70 26 141 0 73 -4 93 -28
142 -70 143 -243 226 -388 185z m171 -226 c60 -44 63 -140 6 -197 -44 -44 -92
-52 -148 -25 -54 26 -78 65 -78 125 0 38 6 52 33 82 51 56 125 62 187 15z'
        />
        <path
          d='M2927 4559 c-205 -48 -321 -276 -238 -465 28 -62 104 -139 170 -171
l56 -28 530 0 c530 0 530 0 579 23 76 34 129 84 166 153 81 153 36 337 -108
436 -88 61 -114 63 -642 62 -261 -1 -492 -5 -513 -10z m1042 -218 c61 -44 78
-123 38 -182 -46 -70 -40 -69 -548 -69 -251 0 -471 3 -489 6 -43 9 -96 63
-104 108 -9 45 21 119 55 137 49 26 89 28 544 26 l470 -2 34 -24z'
        />
        <path
          d='M3680 2004 c-168 -44 -325 -171 -398 -325 -52 -107 -66 -182 -60
-312 4 -81 11 -116 33 -172 73 -183 202 -307 387 -372 94 -34 258 -38 353 -9
208 62 369 223 431 431 27 91 25 240 -4 335 -64 207 -242 377 -444 425 -79 18
-226 18 -298 -1z m324 -222 c258 -121 320 -451 125 -657 -198 -210 -538 -158
-666 102 -31 63 -37 87 -41 157 -5 103 13 171 67 252 49 74 125 132 210 162
95 33 213 27 305 -16z'
        />
        <path
          d='M1583 2890 c-12 -5 -29 -20 -38 -33 -19 -29 -216 -843 -218 -900 -1
-32 4 -44 31 -68 57 -51 137 -30 161 44 23 71 202 834 203 863 0 42 -16 71
-52 89 -32 17 -54 18 -87 5z'
        />
        <path
          d='M914 2807 c-42 -24 -324 -351 -336 -389 -20 -67 -2 -99 158 -279 80
-90 155 -172 166 -181 12 -11 37 -18 62 -18 58 0 96 39 96 97 0 38 -8 50 -130
188 -71 80 -130 150 -130 154 0 4 26 36 58 72 209 236 202 227 202 270 0 76
-81 124 -146 86z'
        />
        <path
          d='M2022 2795 c-35 -30 -45 -69 -27 -110 7 -16 68 -91 134 -165 66 -74
121 -138 121 -141 0 -4 -57 -70 -126 -148 -150 -169 -166 -207 -107 -265 19
-20 36 -26 67 -26 22 0 48 6 57 13 44 33 320 356 330 385 21 63 5 95 -109 225
-59 67 -136 152 -172 190 -57 58 -70 67 -102 67 -24 0 -46 -8 -66 -25z'
        />
        <path
          d='M1459 1275 c-58 -32 -61 -114 -6 -161 26 -22 38 -25 71 -21 56 8 86
44 86 102 0 36 -5 47 -31 69 -34 29 -79 33 -120 11z'
        />
      </g>
    </svg>
  </>
);
}

export default SystemIcon;