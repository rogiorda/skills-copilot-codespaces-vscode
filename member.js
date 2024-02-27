function skillsMember() {
  return {
    skills: ['JavaScript', 'React', 'Node', 'Express', 'MongoDB'],
    age: 30,
    name: 'John',
    getSkills: function () {
      return this.skills;
    },
  };
}