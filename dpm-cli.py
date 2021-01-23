#!/usr/bin/python

import sys, getopt

def main(argv):
    region = ""
    game = ""
    data = ""
    try:
        opts, args = getopt.getopt(argv,"hr:g:d:")
    except getopt.GetoptError:
        print("dpm-cli.py -r <region> -g <game> -d <data>")
        sys.exit(2)
    for opt, arg in opts:
        if opt == '-h':
            print("dpm-cli.py -r <region> -g <game> -d 'name' <antenna> <head> <face> <cheek> <hair> <nose> <glasses> <eyes> <skin> <dye> <color> <mouth>")
            sys.exit()
        elif opt in ("-r"):
            region = arg
        elif opt in ("-g"):
            game = arg
        elif opt in ("-d"):
            data = arg
    print("Selected region is", region)
    print("Selected game is", game)
    print("Head", data)

if __name__ == "__main__":
    main(sys.argv[1:])
