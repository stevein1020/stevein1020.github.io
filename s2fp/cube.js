export default class Cube {
  /**
    * The cube is represented as a flat array of 54 elements (6 faces × 9 stickers)
    * 
    * Face layout:
    * 0: Up (U)
    * 1: Right (R)
    * 2: Front (F)
    * 3: Down (D)
    * 4: Left (L)
    * 5: Back (B)
    * 
    * Each face is numbered 0-8 in reading order (left to right, top to bottom)
    * For example, the Up face positions are:
    *
    * 0 1 2
    * 3 4 5
    * 6 7 8
    * 
    * So the full array is organized:
    *
    * indices 0-8: Up face
    * indices 9-17: Right face
    * indices 18-26: Front face
    * indices 27-35: Down face
    * indices 36-44: Left face
    * indices 45-53: Back face
    * 
    */
  constructor(initialState = null) {
    // Initialize a solved cube with each face having a single color
    this.stickers = [
      // Up face (0-8) - typically white
      0, 0, 0, 0, 0, 0, 0, 0, 0,
      // Right face (9-17) - typically red
      1, 1, 1, 1, 1, 1, 1, 1, 1,
      // Front face (18-26) - typically green
      2, 2, 2, 2, 2, 2, 2, 2, 2,
      // Down face (27-35) - typically yellow
      3, 3, 3, 3, 3, 3, 3, 3, 3,
      // Left face (36-44) - typically orange
      4, 4, 4, 4, 4, 4, 4, 4, 4,
      // Back face (45-53) - typically blue
      5, 5, 5, 5, 5, 5, 5, 5, 5
    ];
  }

  /**
    * Helper function to rotate a face clockwise
    */
  _rotateFaceClockwise(faceStartIndex) {
    const face = this.stickers.slice(faceStartIndex, faceStartIndex + 9);

    // Rotate the face clockwise
    const rotatedFace = [
      face[6], face[3], face[0],
      face[7], face[4], face[1],
      face[8], face[5], face[2]
    ];

    // Update the face in the stickers array
    for (let i = 0; i < 9; i++) {
      this.stickers[faceStartIndex + i] = rotatedFace[i];
    }
  }

  /**
    * Helper function to rotate a face counterclockwise
    */
  _rotateFaceCounterclockwise(faceStartIndex) {
    const face = this.stickers.slice(faceStartIndex, faceStartIndex + 9);

    // Rotate the face counterclockwise
    const rotatedFace = [
      face[2], face[5], face[8],
      face[1], face[4], face[7],
      face[0], face[3], face[6]
    ];

    // Update the face in the stickers array
    for (let i = 0; i < 9; i++) {
      this.stickers[faceStartIndex + i] = rotatedFace[i];
    }
  }

  /**
    * Helper function to rotate a face twice (180 degrees)
    */
  _rotateFaceTwice(faceStartIndex) {
    // rotating twice is the same as rotating clockwise twice
    this._rotateFaceClockwise(faceStartIndex);
    this._rotateFaceClockwise(faceStartIndex);
  }

  R() {
    // Rotate the Right face
    this._rotateFaceClockwise(9);

    // Save affected stickers
    const u2 = this.stickers[2];
    const u5 = this.stickers[5];
    const u8 = this.stickers[8];

    const f2 = this.stickers[20];
    const f5 = this.stickers[23];
    const f8 = this.stickers[26];

    const d2 = this.stickers[29];
    const d5 = this.stickers[32];
    const d8 = this.stickers[35];

    const b0 = this.stickers[45];
    const b3 = this.stickers[48];
    const b6 = this.stickers[51];

    // Update the stickers
    // Up -> Back
    this.stickers[51] = u2;
    this.stickers[48] = u5;
    this.stickers[45] = u8;

    // Front -> Up
    this.stickers[2] = f2;
    this.stickers[5] = f5;
    this.stickers[8] = f8;

    // Down -> Front
    this.stickers[20] = d2;
    this.stickers[23] = d5;
    this.stickers[26] = d8;

    // Back -> Down
    this.stickers[29] = b6;
    this.stickers[32] = b3;
    this.stickers[35] = b0;
  }

  Rp() {
    // Rotate the Right face
    this._rotateFaceCounterclockwise(9);

    // Save affected stickers
    const u2 = this.stickers[2];
    const u5 = this.stickers[5];
    const u8 = this.stickers[8];

    const f2 = this.stickers[20];
    const f5 = this.stickers[23];
    const f8 = this.stickers[26];

    const d2 = this.stickers[29];
    const d5 = this.stickers[32];
    const d8 = this.stickers[35];

    const b0 = this.stickers[45];
    const b3 = this.stickers[48];
    const b6 = this.stickers[51];

    // Update the stickers
    // Up -> Front
    this.stickers[20] = u2;
    this.stickers[23] = u5;
    this.stickers[26] = u8;

    // Front -> Down
    this.stickers[29] = f2;
    this.stickers[32] = f5;
    this.stickers[35] = f8;

    // Down -> Back
    this.stickers[45] = d8;
    this.stickers[48] = d5;
    this.stickers[51] = d2;

    // Back -> Up
    this.stickers[2] = b6;
    this.stickers[5] = b3;
    this.stickers[8] = b0;
  }

  R2() {
    this.R();
    this.R();
  }

  L() {
    // Rotate the Left face
    this._rotateFaceClockwise(36);

    // Save affected stickers
    const u0 = this.stickers[0];
    const u3 = this.stickers[3];
    const u6 = this.stickers[6];

    const f0 = this.stickers[18];
    const f3 = this.stickers[21];
    const f6 = this.stickers[24];

    const d0 = this.stickers[27];
    const d3 = this.stickers[30];
    const d6 = this.stickers[33];

    const b2 = this.stickers[47];
    const b5 = this.stickers[50];
    const b8 = this.stickers[53];

    // Update the stickers
    // Up -> Front
    this.stickers[18] = u0;
    this.stickers[21] = u3;
    this.stickers[24] = u6;

    // Front -> Down
    this.stickers[27] = f0;
    this.stickers[30] = f3;
    this.stickers[33] = f6;

    // Down -> Back
    this.stickers[53] = d0;
    this.stickers[50] = d3;
    this.stickers[47] = d6;

    // Back -> Up
    this.stickers[0] = b8;
    this.stickers[3] = b5;
    this.stickers[6] = b2;
  }

  Lp() {
    // Rotate the Left face
    this._rotateFaceCounterclockwise(36);

    // Save affected stickers
    const u0 = this.stickers[0];
    const u3 = this.stickers[3];
    const u6 = this.stickers[6];

    const f0 = this.stickers[18];
    const f3 = this.stickers[21];
    const f6 = this.stickers[24];

    const d0 = this.stickers[27];
    const d3 = this.stickers[30];
    const d6 = this.stickers[33];

    const b2 = this.stickers[47];
    const b5 = this.stickers[50];
    const b8 = this.stickers[53];

    // Update the stickers
    // Up -> Back
    this.stickers[47] = u6;
    this.stickers[50] = u3;
    this.stickers[53] = u0;

    // Front -> Up
    this.stickers[0] = f0;
    this.stickers[3] = f3;
    this.stickers[6] = f6;

    // Down -> Front
    this.stickers[18] = d0;
    this.stickers[21] = d3;
    this.stickers[24] = d6;

    // Back -> Down
    this.stickers[27] = b8;
    this.stickers[30] = b5;
    this.stickers[33] = b2;
  }

  L2() {
    this.L();
    this.L();
  }

  F() {
    // Rotate the Front face
    this._rotateFaceClockwise(18);

    // Save affected stickers
    const u6 = this.stickers[6];
    const u7 = this.stickers[7];
    const u8 = this.stickers[8];

    const r0 = this.stickers[9];
    const r3 = this.stickers[12];
    const r6 = this.stickers[15];

    const d0 = this.stickers[27];
    const d1 = this.stickers[28];
    const d2 = this.stickers[29];

    const l2 = this.stickers[38];
    const l5 = this.stickers[41];
    const l8 = this.stickers[44];

    // Update the stickers
    // Up -> Right
    this.stickers[9] = u6;
    this.stickers[12] = u7;
    this.stickers[15] = u8;

    // Right -> Down
    this.stickers[27] = r6;
    this.stickers[28] = r3;
    this.stickers[29] = r0;

    // Down -> Left
    this.stickers[38] = d0;
    this.stickers[41] = d1;
    this.stickers[44] = d2;

    // Left -> Up
    this.stickers[6] = l8;
    this.stickers[7] = l5;
    this.stickers[8] = l2;
  }

  Fp() {
    // Rotate the Front face
    this._rotateFaceCounterclockwise(18);

    // Save affected stickers
    const u6 = this.stickers[6];
    const u7 = this.stickers[7];
    const u8 = this.stickers[8];

    const r0 = this.stickers[9];
    const r3 = this.stickers[12];
    const r6 = this.stickers[15];

    const d0 = this.stickers[27];
    const d1 = this.stickers[28];
    const d2 = this.stickers[29];

    const l2 = this.stickers[38];
    const l5 = this.stickers[41];
    const l8 = this.stickers[44];

    // Update the stickers
    // Up -> Left
    this.stickers[38] = u8;
    this.stickers[41] = u7;
    this.stickers[44] = u6;

    // Right -> Up
    this.stickers[6] = r0;
    this.stickers[7] = r3;
    this.stickers[8] = r6;

    // Down -> Right
    this.stickers[9] = d2;
    this.stickers[12] = d1;
    this.stickers[15] = d0;

    // Left -> Down
    this.stickers[27] = l2;
    this.stickers[28] = l5;
    this.stickers[29] = l8;
  }

  F2() {
    this.F();
    this.F();
  }

  B() {
    // Rotate the Back face
    this._rotateFaceClockwise(45);

    // Save affected stickers
    const u0 = this.stickers[0];
    const u1 = this.stickers[1];
    const u2 = this.stickers[2];

    const r2 = this.stickers[11];
    const r5 = this.stickers[14];
    const r8 = this.stickers[17];

    const d6 = this.stickers[33];
    const d7 = this.stickers[34];
    const d8 = this.stickers[35];

    const l0 = this.stickers[36];
    const l3 = this.stickers[39];
    const l6 = this.stickers[42];

    // Update the stickers
    // Up -> Left
    this.stickers[36] = u2;
    this.stickers[39] = u1;
    this.stickers[42] = u0;

    // Right -> Up
    this.stickers[0] = r2;
    this.stickers[1] = r5;
    this.stickers[2] = r8;

    // Down -> Right
    this.stickers[11] = d8;
    this.stickers[14] = d7;
    this.stickers[17] = d6;

    // Left -> Down
    this.stickers[33] = l0;
    this.stickers[34] = l3;
    this.stickers[35] = l6;
  }

  Bp() {
    // Rotate the Back face
    this._rotateFaceCounterclockwise(45);

    // Save affected stickers
    const u0 = this.stickers[0];
    const u1 = this.stickers[1];
    const u2 = this.stickers[2];

    const r2 = this.stickers[11];
    const r5 = this.stickers[14];
    const r8 = this.stickers[17];

    const d6 = this.stickers[33];
    const d7 = this.stickers[34];
    const d8 = this.stickers[35];

    const l0 = this.stickers[36];
    const l3 = this.stickers[39];
    const l6 = this.stickers[42];

    // Update the stickers
    // Up -> Right
    this.stickers[11] = u0;
    this.stickers[14] = u1;
    this.stickers[17] = u2;

    // Right -> Down
    this.stickers[35] = r2;
    this.stickers[34] = r5;
    this.stickers[33] = r8;

    // Down -> Left
    this.stickers[36] = d6;
    this.stickers[39] = d7;
    this.stickers[42] = d8;

    // Left -> Up
    this.stickers[0] = l6;
    this.stickers[1] = l3;
    this.stickers[2] = l0;
  }

  B2() {
    this.B();
    this.B();
  }

  U() {
    // Rotate the Up face
    this._rotateFaceClockwise(0);

    // Save affected stickers
    const f0 = this.stickers[18];
    const f1 = this.stickers[19];
    const f2 = this.stickers[20];

    const r0 = this.stickers[9];
    const r1 = this.stickers[10];
    const r2 = this.stickers[11];

    const b0 = this.stickers[45];
    const b1 = this.stickers[46];
    const b2 = this.stickers[47];

    const l0 = this.stickers[36];
    const l1 = this.stickers[37];
    const l2 = this.stickers[38];

    // Update the stickers
    // Front -> Left
    this.stickers[36] = f0;
    this.stickers[37] = f1;
    this.stickers[38] = f2;

    // Right -> Front
    this.stickers[18] = r0;
    this.stickers[19] = r1;
    this.stickers[20] = r2;

    // Back -> Right
    this.stickers[9] = b0;
    this.stickers[10] = b1;
    this.stickers[11] = b2;

    // Left -> Back
    this.stickers[45] = l0;
    this.stickers[46] = l1;
    this.stickers[47] = l2;
  }

  Up() {
    // Rotate the Up face
    this._rotateFaceCounterclockwise(0);

    // Save affected stickers
    const f0 = this.stickers[18];
    const f1 = this.stickers[19];
    const f2 = this.stickers[20];

    const r0 = this.stickers[9];
    const r1 = this.stickers[10];
    const r2 = this.stickers[11];

    const b0 = this.stickers[45];
    const b1 = this.stickers[46];
    const b2 = this.stickers[47];

    const l0 = this.stickers[36];
    const l1 = this.stickers[37];
    const l2 = this.stickers[38];

    // Update the stickers
    // Front -> Right
    this.stickers[9] = f0;
    this.stickers[10] = f1;
    this.stickers[11] = f2;

    // Right -> Back
    this.stickers[45] = r0;
    this.stickers[46] = r1;
    this.stickers[47] = r2;

    // Back -> Left
    this.stickers[36] = b0;
    this.stickers[37] = b1;
    this.stickers[38] = b2;

    // Left -> Front
    this.stickers[18] = l0;
    this.stickers[19] = l1;
    this.stickers[20] = l2;
  }

  U2() {
    this.U();
    this.U();
  }

  D() {
    // Rotate the Down face
    this._rotateFaceClockwise(27);

    // Save affected stickers
    const f6 = this.stickers[24];
    const f7 = this.stickers[25];
    const f8 = this.stickers[26];

    const r6 = this.stickers[15];
    const r7 = this.stickers[16];
    const r8 = this.stickers[17];

    const b6 = this.stickers[51];
    const b7 = this.stickers[52];
    const b8 = this.stickers[53];

    const l6 = this.stickers[42];
    const l7 = this.stickers[43];
    const l8 = this.stickers[44];

    // Update the stickers
    // Front -> Right
    this.stickers[15] = f6;
    this.stickers[16] = f7;
    this.stickers[17] = f8;

    // Right -> Back
    this.stickers[51] = r6;
    this.stickers[52] = r7;
    this.stickers[53] = r8;

    // Back -> Left
    this.stickers[42] = b6;
    this.stickers[43] = b7;
    this.stickers[44] = b8;

    // Left -> Front
    this.stickers[24] = l6;
    this.stickers[25] = l7;
    this.stickers[26] = l8;
  }

  Dp() {
    // Rotate the Down face
    this._rotateFaceCounterclockwise(27);

    // Save affected stickers
    const f6 = this.stickers[24];
    const f7 = this.stickers[25];
    const f8 = this.stickers[26];

    const r6 = this.stickers[15];
    const r7 = this.stickers[16];
    const r8 = this.stickers[17];

    const b6 = this.stickers[51];
    const b7 = this.stickers[52];
    const b8 = this.stickers[53];

    const l6 = this.stickers[42];
    const l7 = this.stickers[43];
    const l8 = this.stickers[44];

    // Update the stickers
    // Front -> Left
    this.stickers[42] = f6;
    this.stickers[43] = f7;
    this.stickers[44] = f8;

    // Right -> Front
    this.stickers[24] = r6;
    this.stickers[25] = r7;
    this.stickers[26] = r8;

    // Back -> Right
    this.stickers[15] = b6;
    this.stickers[16] = b7;
    this.stickers[17] = b8;

    // Left -> Back
    this.stickers[51] = l6;
    this.stickers[52] = l7;
    this.stickers[53] = l8;
  }

  D2() {
    this.D();
    this.D();
  }

  M() {
    // M moves the middle slice between L and R faces, following the direction of L

    // Save affected stickers
    const u1 = this.stickers[1];
    const u4 = this.stickers[4];
    const u7 = this.stickers[7];

    const f1 = this.stickers[19];
    const f4 = this.stickers[22];
    const f7 = this.stickers[25];

    const d1 = this.stickers[28];
    const d4 = this.stickers[31];
    const d7 = this.stickers[34];

    const b1 = this.stickers[46];
    const b4 = this.stickers[49];
    const b7 = this.stickers[52];

    // Update the stickers in the same pattern as L move
    // Up -> Front
    this.stickers[19] = u1;
    this.stickers[22] = u4;
    this.stickers[25] = u7;

    // Front -> Down
    this.stickers[28] = f1;
    this.stickers[31] = f4;
    this.stickers[34] = f7;

    // Down -> Back
    this.stickers[52] = d1;
    this.stickers[49] = d4;
    this.stickers[46] = d7;

    // Back -> Up
    this.stickers[1] = b7;
    this.stickers[4] = b4;
    this.stickers[7] = b1;
  }

  /**
    * Mp slice move (Middle prime, opposite of M)
    */
  Mp() {
    // Mp moves the middle slice in the opposite direction of M

    // Save affected stickers
    const u1 = this.stickers[1];
    const u4 = this.stickers[4];
    const u7 = this.stickers[7];

    const f1 = this.stickers[19];
    const f4 = this.stickers[22];
    const f7 = this.stickers[25];

    const d1 = this.stickers[28];
    const d4 = this.stickers[31];
    const d7 = this.stickers[34];

    const b1 = this.stickers[46];
    const b4 = this.stickers[49];
    const b7 = this.stickers[52];

    // Update the stickers in the same pattern as L' move
    // Up -> Back (with orientation reversal)
    this.stickers[46] = u7;
    this.stickers[49] = u4;
    this.stickers[52] = u1;

    // Back -> Down (with orientation reversal)
    this.stickers[28] = b7;
    this.stickers[31] = b4;
    this.stickers[34] = b1;

    // Down -> Front
    this.stickers[19] = d1;
    this.stickers[22] = d4;
    this.stickers[25] = d7;

    // Front -> Up
    this.stickers[1] = f1;
    this.stickers[4] = f4;
    this.stickers[7] = f7;
  }

  M2() {
    // M2 is equivalent to doing M twice
    this.M();
    this.M();
  }

  E() {
    // Rotate the middle slice between U and D in the same direction as D
    // Save affected stickers
    const f3 = this.stickers[21];
    const f4 = this.stickers[22];
    const f5 = this.stickers[23];

    const r3 = this.stickers[12];
    const r4 = this.stickers[13];
    const r5 = this.stickers[14];

    const b3 = this.stickers[48];
    const b4 = this.stickers[49];
    const b5 = this.stickers[50];

    const l3 = this.stickers[39];
    const l4 = this.stickers[40];
    const l5 = this.stickers[41];

    // F -> R (E slice follows the same direction as D)
    this.stickers[12] = f3;
    this.stickers[13] = f4;
    this.stickers[14] = f5;

    // R -> B
    this.stickers[48] = r3;
    this.stickers[49] = r4;
    this.stickers[50] = r5;

    // B -> L
    this.stickers[39] = b3;
    this.stickers[40] = b4;
    this.stickers[41] = b5;

    // L -> F
    this.stickers[21] = l3;
    this.stickers[22] = l4;
    this.stickers[23] = l5;
  }

  Ep() {
    // Rotate the middle slice between U and D in the same direction as D'
    // Save affected stickers
    const f3 = this.stickers[21];
    const f4 = this.stickers[22];
    const f5 = this.stickers[23];

    const r3 = this.stickers[12];
    const r4 = this.stickers[13];
    const r5 = this.stickers[14];

    const b3 = this.stickers[48];
    const b4 = this.stickers[49];
    const b5 = this.stickers[50];

    const l3 = this.stickers[39];
    const l4 = this.stickers[40];
    const l5 = this.stickers[41];

    // F -> L (E slice follows the same direction as D')
    this.stickers[39] = f3;
    this.stickers[40] = f4;
    this.stickers[41] = f5;

    // L -> B
    this.stickers[48] = l3;
    this.stickers[49] = l4;
    this.stickers[50] = l5;

    // B -> R
    this.stickers[12] = b3;
    this.stickers[13] = b4;
    this.stickers[14] = b5;

    // R -> F
    this.stickers[21] = r3;
    this.stickers[22] = r4;
    this.stickers[23] = r5;
  }

  E2() {
    this.E();
    this.E();
  }

  S() {
    // Rotate the middle slice between F and B in the same direction as F
    // Save affected stickers
    const u3 = this.stickers[3];
    const u4 = this.stickers[4];
    const u5 = this.stickers[5];

    const r1 = this.stickers[10];
    const r4 = this.stickers[13];
    const r7 = this.stickers[16];

    const d3 = this.stickers[30];
    const d4 = this.stickers[31];
    const d5 = this.stickers[32];

    const l1 = this.stickers[37];
    const l4 = this.stickers[40];
    const l7 = this.stickers[43];

    // U -> R (S follows F direction)
    this.stickers[10] = u3;
    this.stickers[13] = u4;
    this.stickers[16] = u5;

    // R -> D (with orientation change)
    this.stickers[32] = r1;
    this.stickers[31] = r4;
    this.stickers[30] = r7;

    // D -> L (no orientation change)
    this.stickers[37] = d3;
    this.stickers[40] = d4;
    this.stickers[43] = d5;

    // L -> U (with orientation change)
    this.stickers[3] = l7;
    this.stickers[4] = l4;
    this.stickers[5] = l1;
  }

  Sp() {
    // Rotate the middle slice between F and B in the same direction as F'
    // Save affected stickers
    const u3 = this.stickers[3];
    const u4 = this.stickers[4];
    const u5 = this.stickers[5];

    const r1 = this.stickers[10];
    const r4 = this.stickers[13];
    const r7 = this.stickers[16];

    const d3 = this.stickers[30];
    const d4 = this.stickers[31];
    const d5 = this.stickers[32];

    const l1 = this.stickers[37];
    const l4 = this.stickers[40];
    const l7 = this.stickers[43];

    // U -> L (S' follows F' direction)
    this.stickers[37] = u5;
    this.stickers[40] = u4;
    this.stickers[43] = u3;

    // L -> D (no orientation change)
    this.stickers[30] = l1;
    this.stickers[31] = l4;
    this.stickers[32] = l7;

    // D -> R (with orientation change)
    this.stickers[10] = d5;
    this.stickers[13] = d4;
    this.stickers[16] = d3;

    // R -> U (with orientation change)
    this.stickers[3] = r1;
    this.stickers[4] = r4;
    this.stickers[5] = r7;
  }

  S2() {
    this.S();
    this.S();
  }

  Rw() {
    this.L();
    this.x();
  }

  Rwp() {
    this.Lp();
    this.xp();
  }

  Rw2() {
    this.L2();
    this.x2();
  }

  Lw() {
    this.R();
    this.xp();
  }

  Lwp() {
    this.Rp();
    this.x();
  }

  Lw2() {
    this.R2();
    this.x2();
  }

  Uw() {
    this.D();
    this.y();
  }

  Uwp() {
    this.Dp();
    this.yp();
  }

  Uw2() {
    this.D2();
    this.y2();
  }

  Dw() {
    this.U();
    this.yp();
  }

  Dwp() {
    this.Up();
    this.y();
  }

  Dw2() {
    this.U2();
    this.y2();
  }

  Fw() {
    this.B();
    this.z();
  }

  Fwp() {
    this.Bp();
    this.zp();
  }

  Fw2() {
    this.B2();
    this.z2();
  }

  Bw() {
    this.F();
    this.zp();
  }

  Bwp() {
    this.Fp();
    this.z();
  }

  Bw2() {
    this.F2();
    this.z2();
  }

  x() {
    this.R();   // Right face clockwise
    this.Mp();  // Middle slice counterclockwise (follows L' direction)
    this.Lp();  // Left face counterclockwise
  }

  xp() {
    this.Rp();  // Right face counterclockwise
    this.M();   // Middle slice clockwise (follows L direction)
    this.L();   // Left face clockwise
  }

  x2() {
    this.x();
    this.x();
  }

  y() {
    this.U();   // Up face clockwise
    this.Ep();  // E slice counterclockwise (follows D' direction)
    this.Dp();  // Down face counterclockwise
  }

  yp() {
    this.Up();  // Up face counterclockwise
    this.E();   // E slice clockwise (follows D direction)
    this.D();   // Down face clockwise
  }

  y2() {
    this.y();
    this.y();
  }

  z() {
    this.F();   // Front face clockwise
    this.S();   // S slice clockwise (follows F direction)
    this.Bp();  // Back face counterclockwise
  }

  zp() {
    this.Fp();  // Front face counterclockwise
    this.Sp();  // S slice counterclockwise (follows F' direction)
    this.B();   // Back face clockwise
  }

  z2() {
    this.z();
    this.z();
  }

  /**
    * Apply a move given as a string
    */
  applyMove(move) {
    if (move === "R") this.R();
    else if (move === "R'") this.Rp();
    else if (move === "R2") this.R2();
    else if (move === "L") this.L();
    else if (move === "L'") this.Lp();
    else if (move === "L2") this.L2();
    else if (move === "U") this.U();
    else if (move === "U'") this.Up();
    else if (move === "U2") this.U2();
    else if (move === "D") this.D();
    else if (move === "D'") this.Dp();
    else if (move === "D2") this.D2();
    else if (move === "F") this.F();
    else if (move === "F'") this.Fp();
    else if (move === "F2") this.F2();
    else if (move === "B") this.B();
    else if (move === "B'") this.Bp();
    else if (move === "B2") this.B2();
    else if (move === "M") this.M();
    else if (move === "M'") this.Mp();
    else if (move === "M2") this.M2();
    else if (move === "E") this.E();
    else if (move === "E'") this.Ep();
    else if (move === "E2") this.E2();
    else if (move === "S") this.S();
    else if (move === "S'") this.Sp();
    else if (move === "S2") this.S2();
    else if (move === "Rw") this.Rw();
    else if (move === "Rw'") this.Rwp();
    else if (move === "Rw2") this.Rw2();
    else if (move === "Lw") this.Lw();
    else if (move === "Lw'") this.Lwp();
    else if (move === "Lw2") this.Lw2();
    else if (move === "Uw") this.Uw();
    else if (move === "Uw'") this.Uwp();
    else if (move === "Uw2") this.Uw2();
    else if (move === "Dw") this.Dw();
    else if (move === "Dw'") this.Dwp();
    else if (move === "Dw2") this.Dw2();
    else if (move === "Fw") this.Fw();
    else if (move === "Fw'") this.Fwp();
    else if (move === "Fw2") this.Fw2();
    else if (move === "Bw") this.Bw();
    else if (move === "Bw'") this.Bwp();
    else if (move === "Bw2") this.Bw2();
    else if (move === "x") this.x();
    else if (move === "x'") this.xp();
    else if (move === "x2") this.x2();
    else if (move === "y") this.y();
    else if (move === "y'") this.yp();
    else if (move === "y2") this.y2();
    else if (move === "z") this.z();
    else if (move === "z'") this.zp();
    else if (move === "z2") this.z2();
    else console.error(`Unknown move: ${move}`);
  }

  /**
    * Applies a sequence of moves, given as an array of strings.
    */
  applyMoves(moves) {
    moves.forEach(applyMove)
  }
}
