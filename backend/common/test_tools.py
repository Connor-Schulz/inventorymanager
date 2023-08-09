import unittest
from .tools import json_to_dict


class TestJsonToDict(unittest.TestCase):

    def test_json_to_dict(self):
        self.assertEqual(json_to_dict('{"name": "test", "price": 1.99, "quantity": 1, "id": 1}'), {
                         "name": "test", "price": 1.99, "quantity": 1, "id": 1})
        self.assertEqual(json_to_dict('{"name": "test", "price": 1.99, "quantity": 1, "id": 1, "test": {"test": "test"}}'), {
                         "name": "test", "price": 1.99, "quantity": 1, "id": 1, "test": {"test": "test"}})
        self.assertEqual(json_to_dict('{"name": "test", "price": 1.99, "quantity": 1, "id": 1, "test": {"test": "test"}, "test_list": [1, 2, 3, 4, 5, {"test": "test"}]}'), {
                         "name": "test", "price": 1.99, "quantity": 1, "id": 1, "test": {"test": "test"}, "test_list": [1, 2, 3, 4, 5, {"test": "test"}]})

    def test_return_type(self):
        self.assertEqual(type(json_to_dict(
            '{"name": "test", "price": 1.99, "quantity": 1, "id": 1}')), dict)
        self.assertEqual(type(json_to_dict(
            '{"name": "test", "price": 1.99, "quantity": 1, "id": 1, "test": {"test": "test"}}')), dict)
        self.assertEqual(type(json_to_dict(
            '{"name": "test", "price": 1.99, "quantity": 1, "id": 1, "test": {"test": "test"}, "test_list": [1, 2, 3, 4, 5]}')), dict)


if __name__ == '__main__':
    unittest.main()
