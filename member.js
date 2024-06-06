function skillsMember() {
    return {
        restrit: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        buildToController: true,
        scope: {
            member: '=',
        }
    };
}