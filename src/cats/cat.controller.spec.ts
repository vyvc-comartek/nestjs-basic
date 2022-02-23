import { CatController } from './cat.controller';
import { CatService } from './cat.service';
import { Cat } from './interfaces/cat.interface';

describe('CatController', () => {
	let catController: CatController;
	let catService: CatService;
	beforeEach(() => {
		catService = new CatService();
		catController = new CatController(catService);
		catController.create({
			name: 'Milo',
			color: 'brown&black',
			age: 2,
		});
	});

	describe('create', () => {
		it('should return an array of cats', async () => {
			const result: Cat = {
				name: 'Kitty',
				color: 'white',
				age: 3,
			};

			jest.spyOn(catService, 'create').mockImplementation(
				async () => result,
			);

			expect(await catController.create(result)).toBe(result);
		});
	});

	describe('delete', () => {
		it('should be an empty array', async () => {
			await catController.delete({ index: 0 });

			jest.spyOn(catService, 'delete').mockImplementation(
				async () => true,
			);

			expect(catService.getCats()).toStrictEqual([]);
		});
	});

	describe('getByIndex', () => {
		it('should be an cat object', async () => {
			const result = await catController.create({
				name: 'Kitty',
				color: 'white',
				age: 3,
			});

			jest.spyOn(catService, 'getByIndex').mockImplementation(
				async () => result as Cat,
			);

			expect(
				await catController.getByIndex({
					index: 1,
				}),
			).toStrictEqual(result);
		});
	});

	describe('replace', () => {
		it('should be an cat object', async () => {
			const result = await catController.replace({
				name: 'Max',
				age: 5,
				color: 'gray',
				index: 3,
			});

			jest.spyOn(catService, 'replace').mockImplementation(
				async () => result,
			);

			expect(
				await catController.getByIndex({
					index: 3,
				}),
			).toStrictEqual(result);
		});
	});

	describe('search', () => {
		it('should be an array with length 2', async () => {
			const result = await catController.create({
				name: 'Max',
				age: 5,
				color: 'gray',
			});

			jest.spyOn(catService, 'search').mockImplementation(
				async (a) => await catController.search(a),
			);

			expect(
				(
					await catController.search({
						name: '',
					})
				).length,
			).toBe(2);
		});
	});
});
