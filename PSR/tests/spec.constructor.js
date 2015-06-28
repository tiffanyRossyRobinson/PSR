describe('Character Constructor', function () {

  beforeEach(function () {
    this.playerOne = new player("Tiffany");
    this.compPlayer = new computer();
  });

  it('should be instance of Player', function () {
    expect(this.playerOne).to.be.an.instanceof(player);
  });

  it('should have defaults', function () {
    expect(this.playerOne.life).to.be.equal(100);
  });

  it('should have a random number for the computers choice', function () {
    expect(this.compPlayer.computerPick).to.be.a('number');
  });


  describe('Game Constructor', function () {
    beforeEach(function () {
      this.testGame = new game("scissors", "rock");
    });

    it('it should store the computers and players picks', function () {
       expect(this.testGame.playersPick).is.equal("scissors");
       expect(this.testGame.computersPick).is.equal("rock");
    });

  });


});
