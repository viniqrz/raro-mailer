import {MigrationInterface, QueryRunner} from "typeorm";

export class init1637637254494 implements MigrationInterface {
    name = 'init1637637254494'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`address\` (\`id\` int NOT NULL AUTO_INCREMENT, \`street\` varchar(50) NOT NULL, \`number\` int NOT NULL, \`district\` varchar(20) NOT NULL, \`city\` varchar(30) NOT NULL, \`state\` varchar(25) NOT NULL, \`country\` varchar(30) NOT NULL, \`cep\` varchar(15) NOT NULL, \`employeeId\` int NULL, UNIQUE INDEX \`REL_9b44dcf8132ae6af5d0efcaec1\` (\`employeeId\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`bundle\` (\`id\` int NOT NULL AUTO_INCREMENT, \`employeeId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`employee\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(25) NOT NULL, \`lastName\` varchar(25) NOT NULL, \`position\` varchar(50) NOT NULL, \`phoneNumber\` varchar(20) NOT NULL, \`email\` varchar(80) NOT NULL, \`department\` varchar(50) NOT NULL, \`actorId\` int NULL, UNIQUE INDEX \`IDX_b16a62b0eb49a67425c9a6bca1\` (\`phoneNumber\`), UNIQUE INDEX \`IDX_817d1d427138772d47eca04885\` (\`email\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`actor\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(25) NOT NULL, \`lastName\` varchar(25) NOT NULL, \`position\` varchar(50) NOT NULL, \`phoneNumber\` varchar(20) NOT NULL, \`email\` varchar(80) NOT NULL, \`department\` varchar(50) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`action\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(120) NOT NULL, \`subject\` varchar(80) NOT NULL, \`body\` varchar(1200) NOT NULL, \`date\` datetime NOT NULL, \`actorId\` int NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`scheme\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`action_template\` (\`id\` int NOT NULL AUTO_INCREMENT, \`name\` varchar(120) NOT NULL, \`subject\` varchar(80) NOT NULL, \`body\` varchar(1200) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user\` (\`id\` int NOT NULL AUTO_INCREMENT, \`firstName\` varchar(25) NOT NULL, \`lastName\` varchar(25) NOT NULL, \`position\` varchar(50) NOT NULL, \`phoneNumber\` varchar(20) NOT NULL, \`email\` varchar(80) NOT NULL, \`password\` varchar(80) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`bundle_actions_action\` (\`bundleId\` int NOT NULL, \`actionId\` int NOT NULL, INDEX \`IDX_e392b6127ad1c54f7f1029bc8e\` (\`bundleId\`), INDEX \`IDX_3fc88aa16974f0d584174f045a\` (\`actionId\`), PRIMARY KEY (\`bundleId\`, \`actionId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`scheme_action_templates_action_template\` (\`schemeId\` int NOT NULL, \`actionTemplateId\` int NOT NULL, INDEX \`IDX_1038af8477f019eab133e81764\` (\`schemeId\`), INDEX \`IDX_da4fcae36c161609f4f10d5596\` (\`actionTemplateId\`), PRIMARY KEY (\`schemeId\`, \`actionTemplateId\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`address\` ADD CONSTRAINT \`FK_9b44dcf8132ae6af5d0efcaec1c\` FOREIGN KEY (\`employeeId\`) REFERENCES \`employee\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`bundle\` ADD CONSTRAINT \`FK_18e57a1b5e12e94bde5b1ce145f\` FOREIGN KEY (\`employeeId\`) REFERENCES \`employee\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`employee\` ADD CONSTRAINT \`FK_5c1985fa34f8aa182bc429726b2\` FOREIGN KEY (\`actorId\`) REFERENCES \`actor\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`action\` ADD CONSTRAINT \`FK_1378bf19bf2ca8a82203baff3c9\` FOREIGN KEY (\`actorId\`) REFERENCES \`actor\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`bundle_actions_action\` ADD CONSTRAINT \`FK_e392b6127ad1c54f7f1029bc8e5\` FOREIGN KEY (\`bundleId\`) REFERENCES \`bundle\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`bundle_actions_action\` ADD CONSTRAINT \`FK_3fc88aa16974f0d584174f045a2\` FOREIGN KEY (\`actionId\`) REFERENCES \`action\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`scheme_action_templates_action_template\` ADD CONSTRAINT \`FK_1038af8477f019eab133e817640\` FOREIGN KEY (\`schemeId\`) REFERENCES \`scheme\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`scheme_action_templates_action_template\` ADD CONSTRAINT \`FK_da4fcae36c161609f4f10d55963\` FOREIGN KEY (\`actionTemplateId\`) REFERENCES \`action_template\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`scheme_action_templates_action_template\` DROP FOREIGN KEY \`FK_da4fcae36c161609f4f10d55963\``);
        await queryRunner.query(`ALTER TABLE \`scheme_action_templates_action_template\` DROP FOREIGN KEY \`FK_1038af8477f019eab133e817640\``);
        await queryRunner.query(`ALTER TABLE \`bundle_actions_action\` DROP FOREIGN KEY \`FK_3fc88aa16974f0d584174f045a2\``);
        await queryRunner.query(`ALTER TABLE \`bundle_actions_action\` DROP FOREIGN KEY \`FK_e392b6127ad1c54f7f1029bc8e5\``);
        await queryRunner.query(`ALTER TABLE \`action\` DROP FOREIGN KEY \`FK_1378bf19bf2ca8a82203baff3c9\``);
        await queryRunner.query(`ALTER TABLE \`employee\` DROP FOREIGN KEY \`FK_5c1985fa34f8aa182bc429726b2\``);
        await queryRunner.query(`ALTER TABLE \`bundle\` DROP FOREIGN KEY \`FK_18e57a1b5e12e94bde5b1ce145f\``);
        await queryRunner.query(`ALTER TABLE \`address\` DROP FOREIGN KEY \`FK_9b44dcf8132ae6af5d0efcaec1c\``);
        await queryRunner.query(`DROP INDEX \`IDX_da4fcae36c161609f4f10d5596\` ON \`scheme_action_templates_action_template\``);
        await queryRunner.query(`DROP INDEX \`IDX_1038af8477f019eab133e81764\` ON \`scheme_action_templates_action_template\``);
        await queryRunner.query(`DROP TABLE \`scheme_action_templates_action_template\``);
        await queryRunner.query(`DROP INDEX \`IDX_3fc88aa16974f0d584174f045a\` ON \`bundle_actions_action\``);
        await queryRunner.query(`DROP INDEX \`IDX_e392b6127ad1c54f7f1029bc8e\` ON \`bundle_actions_action\``);
        await queryRunner.query(`DROP TABLE \`bundle_actions_action\``);
        await queryRunner.query(`DROP TABLE \`user\``);
        await queryRunner.query(`DROP TABLE \`action_template\``);
        await queryRunner.query(`DROP TABLE \`scheme\``);
        await queryRunner.query(`DROP TABLE \`action\``);
        await queryRunner.query(`DROP TABLE \`actor\``);
        await queryRunner.query(`DROP INDEX \`IDX_817d1d427138772d47eca04885\` ON \`employee\``);
        await queryRunner.query(`DROP INDEX \`IDX_b16a62b0eb49a67425c9a6bca1\` ON \`employee\``);
        await queryRunner.query(`DROP TABLE \`employee\``);
        await queryRunner.query(`DROP TABLE \`bundle\``);
        await queryRunner.query(`DROP INDEX \`REL_9b44dcf8132ae6af5d0efcaec1\` ON \`address\``);
        await queryRunner.query(`DROP TABLE \`address\``);
    }

}
