import numpy as np
import matplotlib.pyplot as plt

def filter(image, kernel):
    image = np.array(image) # Convert to numpy array
    kernel = np.matrix(kernel) # Convert to numpy matrix

    height = len(image)
    width = len(image[0])

    # Create an empty matrix for processing
    processing_matrix = np.zeros([height + 2, width + 2], dtype=int) # 1 pixel larger from borders
    result = np.zeros([height, width]) # Create an empty matrix for output

    for row in range(len(image)): # For every row
        for col in range(len(image[row])): # For every element in a row
            # Copy element in image to 1 right, 1 down index in processing matrix for edge handling
            processing_matrix.itemset((row + 1, col + 1), image[row][col])

    for row in range(1, height + 1):
        for col in range(1, width + 1):
            neighbors = processing_matrix[row-1:row+2, col-1:col+2]

            # Sum of element-wise multiply
            total_value = 0.0
            for w in range(3):
                for h in range(3):
                    total_value += neighbors.item(w, h) * kernel.item(w, h)

            result.itemset(row-1, col-1, total_value) # Set final value to index

    return result

img = [[  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[  0,   0,   0,   0,   0,   0, 126, 125, 125, 125, 124, 123, 123, 123, 123, 123, 124, 125, 125, 126, 126,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[  0,   0,   0, 129, 127, 127, 141, 158, 175, 192, 207, 219, 230, 235, 234, 227, 218, 204, 187, 167, 146, 127, 128, 128,   0,   0,   0,   0,   0,   0,   0,   0],
[  0,   0, 129, 134, 160, 186, 212, 221, 223, 226, 228, 230, 232, 234, 237, 239, 242, 244, 246, 248, 239, 208, 172, 137, 129,   0,   0,   0,   0,   0,   0,   0],
[  0, 130, 153, 186, 216, 217, 189, 145, 108,  80,  57,  40,  28,  22,  28,  42,  64,  92, 128, 172, 223, 251, 253, 213, 164, 130,   0,   0,   0,   0,   0,   0],
[131, 154, 197, 202, 146,  88,  43,  21,  21,  21,  21,  21,  21,  21,  21,  21,  21,  21,  21,  21,  55, 118, 191, 251, 231, 165, 131,   0,   0,   0,   0,   0],
[131, 184, 179,  95,  37,  21,  21,  21,  35,  52,  65,  74,  78,  77,  73,  65,  54,  44,  35,  28,  24,  21,  47, 139, 242, 213, 131,   0,   0,   0,   0,   0],
[135, 134, 197, 249, 249, 247, 247, 247, 248, 241, 232, 226, 221, 216, 212, 208, 203, 197, 185, 141, 132, 123, 137, 158, 142, 134,  67,  78, 179, 195, 150, 131],
[131, 177,  87,  21,  21,  21,  36,  70, 106, 111, 105,  99,  91,  83,  74,  66,  58,  50,  41,  35,  28,  23,  32,  43, 140, 244, 132,   0,   0,   0,   0,   0],
[132, 146,  43,  21,  21,  21,  75, 109, 111, 109, 104,  97,  90,  82,  74,  65,  57,  49,  41,  34,  28,  23,  83,  98,  62, 233, 132, 153, 156, 161, 163,   0],
[133, 148,  46,  21,  21,  21,  72, 104, 105, 104, 100,  94,  87,  80,  72,  63,  55,  47,  40,  33,  32,  80, 132,  98,  66, 227, 134, 197, 224, 255, 182, 163],
[133, 164, 119,  44,  21,  21,  36,  63,  91,  97,  94,  89,  83,  76,  68,  60,  53,  45,  44,  71, 105, 127,  85,  73, 197, 182, 166, 230, 234, 239, 255, 159],
[133, 174, 208, 152,  96,  55,  21,  21,  39,  55,  63,  66,  68,  70,  73,  78,  83,  88,  92,  86,  64,  83, 146, 207, 199, 140, 185, 183, 194, 226, 230, 154],
[134, 148, 253, 235, 203, 175, 131, 105,  84,  66,  50,  37,  27,  22,  27,  39,  56,  79, 107, 141, 188, 198, 170, 187, 175, 137,  81,  47,  75, 206, 220, 148],
[134, 133, 243, 251, 250, 249, 229, 212, 200, 191, 186, 183, 183, 186, 192, 199, 204, 209, 209, 175, 153, 126, 125, 172, 169, 116,  39,   0,  53, 179, 206, 142],
[134, 134, 223, 250, 249, 249, 248, 247, 247, 247, 243, 234, 224, 222, 218, 214, 209, 203, 198, 145, 133, 124, 131, 163, 153, 125,   0,  47,  76, 197, 182, 138],
[  0, 135, 147, 245, 247, 247, 247, 247, 241, 231, 228, 224, 218, 212, 207, 202, 198, 193, 179, 140, 130, 123, 142, 155, 133,  81, 108, 188, 184, 139, 120, 127],
[  0, 136, 135, 212, 245, 245, 246, 241, 230, 225, 223, 221, 214, 209, 206, 201, 196, 191, 174, 139, 130, 127, 152, 149, 117, 154, 183, 159, 127, 113, 117,   0],
[  0, 136, 136, 153, 242, 243, 243, 227, 222, 221, 220, 218, 215, 211, 207, 204, 200, 196, 171, 140, 130, 140, 160, 139, 148, 157, 130, 112, 114, 117,   0,   0],
[  0,   0, 136, 136, 212, 240, 226, 212, 216, 218, 219, 218, 216, 214, 213, 210, 206, 201, 169, 141, 135, 157, 155, 121, 130, 116, 111, 109,  57,   0,   0,   0],
[  0,   0, 137, 136, 155, 233, 207, 204, 213, 215, 218, 222, 220, 220, 219, 216, 213, 206, 165, 142, 158, 169, 141, 109, 109,  98,  49,   0,   0,   0,   0,   0],
[  0,   0,   0, 137, 137, 184, 188, 195, 205, 215, 220, 224, 228, 227, 225, 221, 216, 203, 163, 170, 182, 149, 134,  55,  22,   0,   0,   0,   0,   0,   0,   0],
[  0,   0,   0,   0, 137, 140, 176, 189, 204, 215, 224, 232, 233, 233, 231, 227, 219, 205, 191, 197, 159, 137, 112,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[  0,   0,   0,   0,   0, 137, 143, 165, 201, 218, 231, 235, 239, 238, 234, 230, 224, 212, 184, 150, 136, 111,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[  0,   0,   0,   0,   0,   0, 134, 134, 154, 178, 203, 224, 237, 236, 223, 202, 179, 156, 136, 118,  82,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[  0,   0,   0,   0,   0,   0,   0,   0, 121, 123, 126, 131, 135, 137, 134, 129, 120, 103,  72,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0],
[  0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0,   0]]

blur_kernel = [[0.0625, 0.125, 0.0625],[0.125, 0.25, 0.125],[0.0625, 0.125, 0.0625]]

filtered_img = filter(img, blur_kernel)

# Plotting
f, ax = plt.subplots(1,2)
ax[0].imshow(img, cmap="gray")
ax[1].imshow(filtered_img, cmap="gray")
plt.show()