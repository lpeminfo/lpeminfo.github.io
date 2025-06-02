import os

folder = '.'  # current folder

for filename in os.listdir(folder):
    if len(filename) > 4:
        new_name = filename[4:]
        old_path = os.path.join(folder, filename)
        new_path = os.path.join(folder, new_name)
        os.rename(old_path, new_path)
        print(f'Renamed: {filename} -> {new_name}')
